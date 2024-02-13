const connection = require("../database/conexion")

const allUser = async (req, res) => {
  try{
    const query = await connection.execute(`SELECT * FROM user ORDER BY 1 DESC`);
    return res.json(query);
  }catch(error){
    return({
      status: 404,
      send: "error",
      data: error.message,
    })
  }
}

const addUser = async (req, res) => {
  try{
    const { userName, userPhone, userState } = req.body;
    await connection.execute(`INSERT INTO user (userName, userPhone, userState) VALUE ('${userName}','${userPhone}','${userState}')`)
      return res.json({
        message: 'Registro guardado'
      })
  }catch(error){
    return ({
      status: 404,
      send: "error",
      data: error.message,
    })
  }
}

const updateUser = async (req, res) => {
  try{
    const userId = req.params.userId;
    const { userName, userPhone, userState } = req.body;
    await connection.execute(
      `UPDATE user SET userName = ?, userPhone = ?, userState = ? WHERE userId = ?`,
      [userName, userPhone, userState, userId]
    );
    return res.json({
      message: 'Registro actualizado'
    })
  }catch(error){
    return ({
      status: 404,
      data: error.message
    })
  }
}

const deleteUser = async (req, res) => {
  try{
    const userId = req.params.userId;
    await connection.execute(`UPDATE user SET userState = 0 WHERE userId = '${userId}'`)
    return res.json({
      message: 'Registro eliminado'
    })
  }catch(error){
    return ({
      status: 404,
      data: error.message
    })
  }
}
module.exports = {
  allUser,
  addUser,
  updateUser,
  deleteUser
};
