## To Reproduce

```bash
npm start --watch
```

1. View successful start
2. uncomment line 5 from `src/main.ts` (a typescript error).
3. view correct error message in terminal
4. uncomment line 5 from `src/main.ts` (removing the typescript error)
5. The server will attempt to restart and throw an error because the port is already used. (you are also then unable to ctl+c)
