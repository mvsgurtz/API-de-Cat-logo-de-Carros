import express, { json } from "express";
import "express-async-errors"

export const app = express();

app.use(json());