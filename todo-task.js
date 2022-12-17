// Login API
// request
{
  username: "string";
  password: "string";
}
// Response
{
  isAccess: "true";
  userID: "string";
}

// API get /rowRoom
// request
{
  userID: "string";
}
//reponse
{
  listTro: "json"; // dayID: 'string', nameDayTro: 'string'
}

//API get /listRoom
{
  userID: "string";
  dayID: "string";
}
