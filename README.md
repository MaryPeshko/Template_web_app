# Template_web_app

Template web application with:
- Frontend: React + TypeScript + Vite + Tailwind CSS + shadcn/ui
- Backend: FastAPI + Uvicorn
- Dockerized services via Docker Compose

## Project structure

- `client/` — React app
  - `src/` with `api/`, `assets/`, `components/`, `hooks/`, `pages/`, `types/`
  - `src/main.tsx`, `src/App.tsx`, `src/App.css`
- `backend/`
  - `api/routes/`, `api/core/`, `api/models/`, `api/schemas/`, `api/utils/`, `api/main.py`
  - `docs/`, `Dockerfile`, `entrypoint.sh`, `requirements.txt`
- `output/`
- `docker-compose.yml`

## Run

```bash
docker compose up --build
```

- Frontend: http://localhost:5173
- Backend health endpoint: http://localhost:8000/api/health
