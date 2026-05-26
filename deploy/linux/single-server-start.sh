#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
BACKEND_DIR="$ROOT_DIR/backend"
LOG_DIR="$ROOT_DIR/deploy/logs"
PID_FILE="$LOG_DIR/backend.pid"

mkdir -p "$LOG_DIR"

if ! command -v node >/dev/null 2>&1; then
  echo "Error: node is not installed."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "Error: npm is not installed."
  exit 1
fi

cd "$BACKEND_DIR"

if [ ! -f ".env" ]; then
  if [ -f ".env.example" ]; then
    cp .env.example .env
    echo "Created backend/.env from .env.example. Please edit it before starting the service."
    exit 1
  fi

  echo "Error: backend/.env not found."
  exit 1
fi

echo "Installing backend dependencies..."
npm install

if [ "${1:-}" = "--init-db" ]; then
  echo "Initializing database..."
  node init_db.js
fi

if [ -f "$PID_FILE" ] && kill -0 "$(cat "$PID_FILE")" >/dev/null 2>&1; then
  echo "Stopping existing backend process $(cat "$PID_FILE")..."
  kill "$(cat "$PID_FILE")" || true
  rm -f "$PID_FILE"
fi

echo "Starting backend service on port defined in backend/.env..."
nohup node server.js > "$LOG_DIR/backend.out" 2>&1 &
echo $! > "$PID_FILE"

sleep 2

echo "Backend started."
echo "PID: $(cat "$PID_FILE")"
echo "Log file: $LOG_DIR/backend.out"
echo "Open: http://<server-ip>:3000/"
