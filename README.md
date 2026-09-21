# Template_web_app

Template web application with:
- Frontend: React + TypeScript + Vite + Tailwind CSS + shadcn/ui
- Backend: FastAPI + Uvicorn
- Dockerized services via Docker Compose

## Run

```bash
docker compose up --build
```

- Frontend: http://localhost:5173
- Backend health endpoint: http://localhost:8000/api/health
- Backend OpenAPI: http://localhost:8000/docs

## Project structure

- `client/` — React app
- `backend/` — API service running on FastAPI
- `output/` — files instead of DB
