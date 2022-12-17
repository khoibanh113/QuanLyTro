from fastapi import FastAPI, Body
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
import uvicorn
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://127.0.0.1:8000/PostTest",
    "http://localhost:19006"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_Login = { 
  "User_name": "username",
  "Pass_word": "password"
  }

class Login(BaseModel):
  User_name: str 
  Pass_word: str

@app.get("/")
async def hello():
  return {"Hello World"}

_return = {"isAccess" : "true"}
_return_False = {"isAccess" : "false"}

@app.post("/PostTest")
async def Submit(item: Login):
  Validate_User_name = False
  Validate_Pass_word = False
  json_data = jsonable_encoder(item) 
  # Check User and Password
  if(json_data['User_name'] == DB_Login['User_name']):
    Validate_User_name = True
  else:
    return _return_False
  if(json_data['Pass_word'] == DB_Login['Pass_word']):
    Validate_Pass_word = True
  else:
    return 'Wrong Pass_word'

  # check Login
  if(Validate_User_name == True and Validate_Pass_word == True):
    return _return

  return _return_False

if __name__ == "__main__":
  uvicorn.run(app)
