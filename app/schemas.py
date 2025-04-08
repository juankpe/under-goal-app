from pydantic import BaseModel
from datetime import datetime

class MatchCreate(BaseModel):
    id: int
    date: datetime
    home_team: str
    away_team: str
    goals_home: int
    goals_away: int
    risk_level: str
    xg: float
    corners: int
    shots_on_target: int
    btts: str
    over_25: float