# Minute Momentum

A tiny CLI app to track one-minute wins and build daily momentum.

## Features
- Log a quick action with timestamp
- View recent entries
- Check streak and totals
- Local JSON storage (no account required)

## Stack
- Node.js 20+
- TypeScript
- tsx (dev/runtime)

## Setup
```bash
npm install
```

## Run
```bash
npm run dev -- add "Did 1 minute of mobility"
npm run dev -- list
npm run dev -- stats
```

## Test
```bash
npm test
```

## Docker
```bash
docker build -t minute-momentum .
docker run --rm minute-momentum
```
