from fastapi import FastAPI, Body
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
import uvicorn
from pydantic import BaseModel

app = FastAPI()
fake_db = []

DB_Login = { 
  "User_name": "usern_name - 2",
  "Pass_word": "password - 2"
  }

class Login(BaseModel):
  User_name: str 
  Pass_word: str

@app.get("/")
async def hello():
  return {"Hello World"}

@app.post("/PostTest")
async def Submit(item: Login):
  Validate_User_name = False
  Validate_Pass_word = False
  json_data = jsonable_encoder(item) 
  # Check User and Password
  if(json_data['User_name'] == DB_Login['User_name']):
    Validate_User_name = True
  else:
    return 'Wrong User_name'
  if(json_data['Pass_word'] == DB_Login['Pass_word']):
    Validate_Pass_word = True
  else:
    return 'Wrong Pass_word'

  # check Login
  if(Validate_User_name == True and Validate_Pass_word == True):
    return "Login Successfully"

  return 'Login Error'


@app.post("/nonPydantic")
async def nonpydantic(item: str = Body(..., embed=True)):
  print(item)
  return {'user': item} 

@app.put("/items/{id}")
def update_item(id: str, item: Login):
  json_data = jsonable_encoder(item)
  return JSONResponse(content=json_data)

def update_item(id: str, item: Login): 
  json_data = jsonable_encoder(item) 
  fake_db.append(json_data) 

if __name__ == "__main__":
  uvicorn.run(app)
