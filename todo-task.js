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
  listTro: "json"; // rowID: 'string', nameRowRoom: 'string'
}

//API get /listRoom
{
  userID: "string";
  rowID: "string";
}
// response
{
  listRoom: "json"; // roomID: 'string', nameHire: 'String'
}
