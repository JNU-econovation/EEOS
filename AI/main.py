from typing import List
from pydantic import BaseModel

from fastapi import FastAPI, Depends, File, Request, APIRouter
import uvicorn
import requests

from model import sbert

app = FastAPI()
app.include_router(sbert)

@app.get('/')
async def eeosTeamBuilding():
    return {'message' : "eeos team building start"}
