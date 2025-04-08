from sqlalchemy import Column, Integer, String, Float, DateTime
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Match(Base):
    __tablename__ = "matches"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(DateTime)
    home_team = Column(String)
    away_team = Column(String)
    goals_home = Column(Integer)
    goals_away = Column(Integer)
    risk_level = Column(String)
    xg = Column(Float)
    corners = Column(Integer)
    shots_on_target = Column(Integer)
    btts = Column(String)
    over_25 = Column(Float)