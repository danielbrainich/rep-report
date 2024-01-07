from fastapi import FastAPI
from dotenv import load_dotenv

load_dotenv()

from routers import civic_info
from dependencies import setup_dependencies

app = FastAPI()

setup_dependencies(app)

app.include_router(civic_info.civic_info)
