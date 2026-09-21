from fastapi import FastAPI

from api.routes.health import router as health_router

app = FastAPI(title="Template Web App API")
app.include_router(health_router, prefix="/api")
