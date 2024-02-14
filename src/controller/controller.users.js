const connection = require("../database/conexion");

// Función para obtener de los usuarios de la base de datos
const allUser = async (req, res) => {
  try {
    // Realiza una consulta a la base de datos para obtener todos los usuarios, ordenados por la primera columna de forma descendente
    const query = await connection.execute(`SELECT * FROM user ORDER BY 1 DESC`);
    // Retorna la respuesta en formato JSON con los usuarios obtenidos
    return res.json(query);
  } catch (error) {
    // Maneja cualquier error que ocurra durante la consulta y retorna una respuesta de error
    return {
      status: 404,
      send: "error",
      data: error.message,
    };
  }
};

// Función para agregar un nuevo usuario a la base de datos
const addUser = async (req, res) => {
  try {
    // Extrae los datos del nuevo usuario del cuerpo de la solicitud
    const { userName, userPhone, userState } = req.body;
    // Inserta un nuevo registro en la tabla 'user' con los valores proporcionados
    await connection.execute(`INSERT INTO user (userName, userPhone, userState) VALUE ('${userName}','${userPhone}','${userState}')`);
    // Retorna una respuesta en formato JSON indicando que el registro ha sido guardado
    return res.json({
      message: 'Registro guardado'
    });
  } catch (error) {
    // Maneja cualquier error que ocurra durante la inserción y retorna una respuesta de error
    return {
      status: 404,
      send: "error",
      data: error.message,
    };
  }
};

// Función para actualizar la información de un usuario en la base de datos
const updateUser = async (req, res) => {
  try {
    // Extrae el ID del usuario a actualizar de los parámetros de la solicitud
    const userId = req.params.userId;
    // Extrae los nuevos datos del usuario del cuerpo de la solicitud
    const { userName, userPhone, userState } = req.body;
    // Actualiza la información del usuario en la base de datos utilizando el ID
    await connection.execute(
      `UPDATE user SET userName = ?, userPhone = ?, userState = ? WHERE userId = ?`,
      [userName, userPhone, userState, userId]
    );
    // Retorna una respuesta en formato JSON indicando que el registro ha sido actualizado
    return res.json({
      message: 'Registro actualizado'
    });
  } catch (error) {
    // Maneja cualquier error que ocurra durante la actualización y retorna una respuesta de error
    return {
      status: 404,
      data: error.message
    };
  }
};

// Función para marcar como eliminado un usuario en la base de datos
const deleteUser = async (req, res) => {
  try {
    // Extrae el ID del usuario a eliminar de los parámetros de la solicitud
    const userId = req.params.userId;
    // Actualiza el estado del usuario a 0, marcándolo como eliminado
    await connection.execute(`UPDATE user SET userState = 0 WHERE userId = '${userId}'`);
    // Retorna una respuesta en formato JSON indicando que el registro ha sido eliminado
    return res.json({
      message: 'Registro eliminado'
    });
  } catch (error) {
    // Maneja cualquier error que ocurra durante la actualización y retorna una respuesta de error
    return {
      status: 404,
      data: error.message
    };
  }
};
const consultUser = async (req, res) => {
  try { 
    const userId = req.params.userId;
    
     const [result] = await connection.execute(`SELECT * FROM user WHERE userId = ${userId}`);
    if (result.length === 0) {
      return res.status(404).json({
        message: 'Usuario no encontrado'
      });
    }

    const user = result[0];

    return res.json({
      message: 'Usuario encontrado',
      data: user
    });
  } catch (error) {
    // Maneja cualquier error que ocurra durante la consulta y retorna una respuesta de error
    return res.status(500).json({
      message: 'Error al consultar el usuario',
       data:error.message
    });
  }
};
// Exporta todas las funciones para ser utilizadas en otros archivos
module.exports = {

  allUser,
  addUser,
  updateUser,
  deleteUser,
  consultUser
};
