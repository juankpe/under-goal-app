from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from app import models, schemas, crud
from app.database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/save-match/")
def save_match(match: schemas.MatchCreate, db: Session = Depends(get_db)):
    return crud.save_match(db, match)

@app.get("/saved-matches/")
def get_saved_matches(db: Session = Depends(get_db)):
    return db.query(models.Match).all()
