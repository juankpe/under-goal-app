from sqlalchemy.orm import Session
from app import models, schemas

def save_match(db: Session, match_data: schemas.MatchCreate):
    match = models.Match(**match_data.dict())
    db.add(match)
    db.commit()
    db.refresh(match)
    return match