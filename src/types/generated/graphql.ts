export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

export type Appearance = {
   __typename?: 'appearance';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  player: Player;
  player_id: Scalars['Int'];
  team: Team;
  team_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

export type Appearance_Aggregate = {
   __typename?: 'appearance_aggregate';
  aggregate?: Maybe<Appearance_Aggregate_Fields>;
  nodes: Array<Appearance>;
};

export type Appearance_Aggregate_Fields = {
   __typename?: 'appearance_aggregate_fields';
  avg?: Maybe<Appearance_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Appearance_Max_Fields>;
  min?: Maybe<Appearance_Min_Fields>;
  stddev?: Maybe<Appearance_Stddev_Fields>;
  stddev_pop?: Maybe<Appearance_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Appearance_Stddev_Samp_Fields>;
  sum?: Maybe<Appearance_Sum_Fields>;
  var_pop?: Maybe<Appearance_Var_Pop_Fields>;
  var_samp?: Maybe<Appearance_Var_Samp_Fields>;
  variance?: Maybe<Appearance_Variance_Fields>;
};


export type Appearance_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Appearance_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Appearance_Aggregate_Order_By = {
  avg?: Maybe<Appearance_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Appearance_Max_Order_By>;
  min?: Maybe<Appearance_Min_Order_By>;
  stddev?: Maybe<Appearance_Stddev_Order_By>;
  stddev_pop?: Maybe<Appearance_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Appearance_Stddev_Samp_Order_By>;
  sum?: Maybe<Appearance_Sum_Order_By>;
  var_pop?: Maybe<Appearance_Var_Pop_Order_By>;
  var_samp?: Maybe<Appearance_Var_Samp_Order_By>;
  variance?: Maybe<Appearance_Variance_Order_By>;
};

export type Appearance_Arr_Rel_Insert_Input = {
  data: Array<Appearance_Insert_Input>;
  on_conflict?: Maybe<Appearance_On_Conflict>;
};

export type Appearance_Avg_Fields = {
   __typename?: 'appearance_avg_fields';
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

export type Appearance_Avg_Order_By = {
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

export type Appearance_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Appearance_Bool_Exp>>>;
  _not?: Maybe<Appearance_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Appearance_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  player?: Maybe<Player_Bool_Exp>;
  player_id?: Maybe<Int_Comparison_Exp>;
  team?: Maybe<Team_Bool_Exp>;
  team_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Appearance_Constraint {
  AppearancePkey = 'appearance_pkey',
  AppearanceTeamIdPlayerIdKey = 'appearance_team_id_player_id_key'
}

export type Appearance_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
};

export type Appearance_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  player?: Maybe<Player_Obj_Rel_Insert_Input>;
  player_id?: Maybe<Scalars['Int']>;
  team?: Maybe<Team_Obj_Rel_Insert_Input>;
  team_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Appearance_Max_Fields = {
   __typename?: 'appearance_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Appearance_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Appearance_Min_Fields = {
   __typename?: 'appearance_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Appearance_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Appearance_Mutation_Response = {
   __typename?: 'appearance_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Appearance>;
};

export type Appearance_Obj_Rel_Insert_Input = {
  data: Appearance_Insert_Input;
  on_conflict?: Maybe<Appearance_On_Conflict>;
};

export type Appearance_On_Conflict = {
  constraint: Appearance_Constraint;
  update_columns: Array<Appearance_Update_Column>;
  where?: Maybe<Appearance_Bool_Exp>;
};

export type Appearance_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  player?: Maybe<Player_Order_By>;
  player_id?: Maybe<Order_By>;
  team?: Maybe<Team_Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Appearance_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  PlayerId = 'player_id',
  TeamId = 'team_id',
  UpdatedAt = 'updated_at'
}

export type Appearance_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Appearance_Stddev_Fields = {
   __typename?: 'appearance_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

export type Appearance_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

export type Appearance_Stddev_Pop_Fields = {
   __typename?: 'appearance_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

export type Appearance_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

export type Appearance_Stddev_Samp_Fields = {
   __typename?: 'appearance_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

export type Appearance_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

export type Appearance_Sum_Fields = {
   __typename?: 'appearance_sum_fields';
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  team_id?: Maybe<Scalars['Int']>;
};

export type Appearance_Sum_Order_By = {
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

export enum Appearance_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  PlayerId = 'player_id',
  TeamId = 'team_id',
  UpdatedAt = 'updated_at'
}

export type Appearance_Var_Pop_Fields = {
   __typename?: 'appearance_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

export type Appearance_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

export type Appearance_Var_Samp_Fields = {
   __typename?: 'appearance_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

export type Appearance_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

export type Appearance_Variance_Fields = {
   __typename?: 'appearance_variance_fields';
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  team_id?: Maybe<Scalars['Float']>;
};

export type Appearance_Variance_Order_By = {
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
};

export type Game = {
   __typename?: 'game';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  matches: Array<Match>;
  matches_aggregate: Match_Aggregate;
  name: Scalars['String'];
  project: Project;
  project_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};


export type GameMatchesArgs = {
  distinct_on?: Maybe<Array<Match_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Match_Order_By>>;
  where?: Maybe<Match_Bool_Exp>;
};


export type GameMatches_AggregateArgs = {
  distinct_on?: Maybe<Array<Match_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Match_Order_By>>;
  where?: Maybe<Match_Bool_Exp>;
};

export type Game_Aggregate = {
   __typename?: 'game_aggregate';
  aggregate?: Maybe<Game_Aggregate_Fields>;
  nodes: Array<Game>;
};

export type Game_Aggregate_Fields = {
   __typename?: 'game_aggregate_fields';
  avg?: Maybe<Game_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Game_Max_Fields>;
  min?: Maybe<Game_Min_Fields>;
  stddev?: Maybe<Game_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Sum_Fields>;
  var_pop?: Maybe<Game_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Var_Samp_Fields>;
  variance?: Maybe<Game_Variance_Fields>;
};


export type Game_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Game_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Game_Aggregate_Order_By = {
  avg?: Maybe<Game_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Game_Max_Order_By>;
  min?: Maybe<Game_Min_Order_By>;
  stddev?: Maybe<Game_Stddev_Order_By>;
  stddev_pop?: Maybe<Game_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Game_Stddev_Samp_Order_By>;
  sum?: Maybe<Game_Sum_Order_By>;
  var_pop?: Maybe<Game_Var_Pop_Order_By>;
  var_samp?: Maybe<Game_Var_Samp_Order_By>;
  variance?: Maybe<Game_Variance_Order_By>;
};

export type Game_Arr_Rel_Insert_Input = {
  data: Array<Game_Insert_Input>;
  on_conflict?: Maybe<Game_On_Conflict>;
};

export type Game_Avg_Fields = {
   __typename?: 'game_avg_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

export type Game_Avg_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

export type Game_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Game_Bool_Exp>>>;
  _not?: Maybe<Game_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Game_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  matches?: Maybe<Match_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  project?: Maybe<Project_Bool_Exp>;
  project_id?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Game_Constraint {
  GamePkey = 'game_pkey'
}

export type Game_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

export type Game_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  matches?: Maybe<Match_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  project?: Maybe<Project_Obj_Rel_Insert_Input>;
  project_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Game_Max_Fields = {
   __typename?: 'game_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Game_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Game_Min_Fields = {
   __typename?: 'game_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Game_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Game_Mutation_Response = {
   __typename?: 'game_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Game>;
};

export type Game_Obj_Rel_Insert_Input = {
  data: Game_Insert_Input;
  on_conflict?: Maybe<Game_On_Conflict>;
};

export type Game_On_Conflict = {
  constraint: Game_Constraint;
  update_columns: Array<Game_Update_Column>;
  where?: Maybe<Game_Bool_Exp>;
};

export type Game_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  matches_aggregate?: Maybe<Match_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  project?: Maybe<Project_Order_By>;
  project_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Game_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  ProjectId = 'project_id',
  UpdatedAt = 'updated_at'
}

export type Game_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Game_Stddev_Fields = {
   __typename?: 'game_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

export type Game_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

export type Game_Stddev_Pop_Fields = {
   __typename?: 'game_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

export type Game_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

export type Game_Stddev_Samp_Fields = {
   __typename?: 'game_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

export type Game_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

export type Game_Sum_Fields = {
   __typename?: 'game_sum_fields';
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

export type Game_Sum_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

export enum Game_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  ProjectId = 'project_id',
  UpdatedAt = 'updated_at'
}

export type Game_Var_Pop_Fields = {
   __typename?: 'game_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

export type Game_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

export type Game_Var_Samp_Fields = {
   __typename?: 'game_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

export type Game_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

export type Game_Variance_Fields = {
   __typename?: 'game_variance_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

export type Game_Variance_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

export type Match = {
   __typename?: 'match';
  created_at: Scalars['timestamptz'];
  date: Scalars['timestamptz'];
  game: Game;
  game_id: Scalars['Int'];
  ratings: Array<Rating>;
  ratings_aggregate: Rating_Aggregate;
  teams: Array<Team>;
  teams_aggregate: Team_Aggregate;
  updated_at: Scalars['timestamptz'];
  uuid: Scalars['uuid'];
};


export type MatchRatingsArgs = {
  distinct_on?: Maybe<Array<Rating_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Order_By>>;
  where?: Maybe<Rating_Bool_Exp>;
};


export type MatchRatings_AggregateArgs = {
  distinct_on?: Maybe<Array<Rating_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Order_By>>;
  where?: Maybe<Rating_Bool_Exp>;
};


export type MatchTeamsArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


export type MatchTeams_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};

export type Match_Aggregate = {
   __typename?: 'match_aggregate';
  aggregate?: Maybe<Match_Aggregate_Fields>;
  nodes: Array<Match>;
};

export type Match_Aggregate_Fields = {
   __typename?: 'match_aggregate_fields';
  avg?: Maybe<Match_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Match_Max_Fields>;
  min?: Maybe<Match_Min_Fields>;
  stddev?: Maybe<Match_Stddev_Fields>;
  stddev_pop?: Maybe<Match_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Match_Stddev_Samp_Fields>;
  sum?: Maybe<Match_Sum_Fields>;
  var_pop?: Maybe<Match_Var_Pop_Fields>;
  var_samp?: Maybe<Match_Var_Samp_Fields>;
  variance?: Maybe<Match_Variance_Fields>;
};


export type Match_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Match_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Match_Aggregate_Order_By = {
  avg?: Maybe<Match_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Match_Max_Order_By>;
  min?: Maybe<Match_Min_Order_By>;
  stddev?: Maybe<Match_Stddev_Order_By>;
  stddev_pop?: Maybe<Match_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Match_Stddev_Samp_Order_By>;
  sum?: Maybe<Match_Sum_Order_By>;
  var_pop?: Maybe<Match_Var_Pop_Order_By>;
  var_samp?: Maybe<Match_Var_Samp_Order_By>;
  variance?: Maybe<Match_Variance_Order_By>;
};

export type Match_Arr_Rel_Insert_Input = {
  data: Array<Match_Insert_Input>;
  on_conflict?: Maybe<Match_On_Conflict>;
};

export type Match_Avg_Fields = {
   __typename?: 'match_avg_fields';
  game_id?: Maybe<Scalars['Float']>;
};

export type Match_Avg_Order_By = {
  game_id?: Maybe<Order_By>;
};

export type Match_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Match_Bool_Exp>>>;
  _not?: Maybe<Match_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Match_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  date?: Maybe<Timestamptz_Comparison_Exp>;
  game?: Maybe<Game_Bool_Exp>;
  game_id?: Maybe<Int_Comparison_Exp>;
  ratings?: Maybe<Rating_Bool_Exp>;
  teams?: Maybe<Team_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  uuid?: Maybe<Uuid_Comparison_Exp>;
};

export enum Match_Constraint {
  MatchPkey = 'match_pkey',
  MatchUuidKey = 'match_uuid_key'
}

export type Match_Inc_Input = {
  game_id?: Maybe<Scalars['Int']>;
};

export type Match_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['timestamptz']>;
  game?: Maybe<Game_Obj_Rel_Insert_Input>;
  game_id?: Maybe<Scalars['Int']>;
  ratings?: Maybe<Rating_Arr_Rel_Insert_Input>;
  teams?: Maybe<Team_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

export type Match_Max_Fields = {
   __typename?: 'match_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Match_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Match_Min_Fields = {
   __typename?: 'match_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Match_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  game_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Match_Mutation_Response = {
   __typename?: 'match_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Match>;
};

export type Match_Obj_Rel_Insert_Input = {
  data: Match_Insert_Input;
  on_conflict?: Maybe<Match_On_Conflict>;
};

export type Match_On_Conflict = {
  constraint: Match_Constraint;
  update_columns: Array<Match_Update_Column>;
  where?: Maybe<Match_Bool_Exp>;
};

export type Match_Order_By = {
  created_at?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  game?: Maybe<Game_Order_By>;
  game_id?: Maybe<Order_By>;
  ratings_aggregate?: Maybe<Rating_Aggregate_Order_By>;
  teams_aggregate?: Maybe<Team_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  uuid?: Maybe<Order_By>;
};

export enum Match_Select_Column {
  CreatedAt = 'created_at',
  Date = 'date',
  GameId = 'game_id',
  UpdatedAt = 'updated_at',
  Uuid = 'uuid'
}

export type Match_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['timestamptz']>;
  game_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  uuid?: Maybe<Scalars['uuid']>;
};

export type Match_Stddev_Fields = {
   __typename?: 'match_stddev_fields';
  game_id?: Maybe<Scalars['Float']>;
};

export type Match_Stddev_Order_By = {
  game_id?: Maybe<Order_By>;
};

export type Match_Stddev_Pop_Fields = {
   __typename?: 'match_stddev_pop_fields';
  game_id?: Maybe<Scalars['Float']>;
};

export type Match_Stddev_Pop_Order_By = {
  game_id?: Maybe<Order_By>;
};

export type Match_Stddev_Samp_Fields = {
   __typename?: 'match_stddev_samp_fields';
  game_id?: Maybe<Scalars['Float']>;
};

export type Match_Stddev_Samp_Order_By = {
  game_id?: Maybe<Order_By>;
};

export type Match_Sum_Fields = {
   __typename?: 'match_sum_fields';
  game_id?: Maybe<Scalars['Int']>;
};

export type Match_Sum_Order_By = {
  game_id?: Maybe<Order_By>;
};

export enum Match_Update_Column {
  CreatedAt = 'created_at',
  Date = 'date',
  GameId = 'game_id',
  UpdatedAt = 'updated_at',
  Uuid = 'uuid'
}

export type Match_Var_Pop_Fields = {
   __typename?: 'match_var_pop_fields';
  game_id?: Maybe<Scalars['Float']>;
};

export type Match_Var_Pop_Order_By = {
  game_id?: Maybe<Order_By>;
};

export type Match_Var_Samp_Fields = {
   __typename?: 'match_var_samp_fields';
  game_id?: Maybe<Scalars['Float']>;
};

export type Match_Var_Samp_Order_By = {
  game_id?: Maybe<Order_By>;
};

export type Match_Variance_Fields = {
   __typename?: 'match_variance_fields';
  game_id?: Maybe<Scalars['Float']>;
};

export type Match_Variance_Order_By = {
  game_id?: Maybe<Order_By>;
};

export type Mutation_Root = {
   __typename?: 'mutation_root';
  delete_appearance?: Maybe<Appearance_Mutation_Response>;
  delete_game?: Maybe<Game_Mutation_Response>;
  delete_match?: Maybe<Match_Mutation_Response>;
  delete_player?: Maybe<Player_Mutation_Response>;
  delete_project?: Maybe<Project_Mutation_Response>;
  delete_rating?: Maybe<Rating_Mutation_Response>;
  delete_result_type?: Maybe<Result_Type_Mutation_Response>;
  delete_team?: Maybe<Team_Mutation_Response>;
  insert_appearance?: Maybe<Appearance_Mutation_Response>;
  insert_game?: Maybe<Game_Mutation_Response>;
  insert_match?: Maybe<Match_Mutation_Response>;
  insert_player?: Maybe<Player_Mutation_Response>;
  insert_project?: Maybe<Project_Mutation_Response>;
  insert_rating?: Maybe<Rating_Mutation_Response>;
  insert_result_type?: Maybe<Result_Type_Mutation_Response>;
  insert_team?: Maybe<Team_Mutation_Response>;
  update_appearance?: Maybe<Appearance_Mutation_Response>;
  update_game?: Maybe<Game_Mutation_Response>;
  update_match?: Maybe<Match_Mutation_Response>;
  update_player?: Maybe<Player_Mutation_Response>;
  update_project?: Maybe<Project_Mutation_Response>;
  update_rating?: Maybe<Rating_Mutation_Response>;
  update_result_type?: Maybe<Result_Type_Mutation_Response>;
  update_team?: Maybe<Team_Mutation_Response>;
};


export type Mutation_RootDelete_AppearanceArgs = {
  where: Appearance_Bool_Exp;
};


export type Mutation_RootDelete_GameArgs = {
  where: Game_Bool_Exp;
};


export type Mutation_RootDelete_MatchArgs = {
  where: Match_Bool_Exp;
};


export type Mutation_RootDelete_PlayerArgs = {
  where: Player_Bool_Exp;
};


export type Mutation_RootDelete_ProjectArgs = {
  where: Project_Bool_Exp;
};


export type Mutation_RootDelete_RatingArgs = {
  where: Rating_Bool_Exp;
};


export type Mutation_RootDelete_Result_TypeArgs = {
  where: Result_Type_Bool_Exp;
};


export type Mutation_RootDelete_TeamArgs = {
  where: Team_Bool_Exp;
};


export type Mutation_RootInsert_AppearanceArgs = {
  objects: Array<Appearance_Insert_Input>;
  on_conflict?: Maybe<Appearance_On_Conflict>;
};


export type Mutation_RootInsert_GameArgs = {
  objects: Array<Game_Insert_Input>;
  on_conflict?: Maybe<Game_On_Conflict>;
};


export type Mutation_RootInsert_MatchArgs = {
  objects: Array<Match_Insert_Input>;
  on_conflict?: Maybe<Match_On_Conflict>;
};


export type Mutation_RootInsert_PlayerArgs = {
  objects: Array<Player_Insert_Input>;
  on_conflict?: Maybe<Player_On_Conflict>;
};


export type Mutation_RootInsert_ProjectArgs = {
  objects: Array<Project_Insert_Input>;
  on_conflict?: Maybe<Project_On_Conflict>;
};


export type Mutation_RootInsert_RatingArgs = {
  objects: Array<Rating_Insert_Input>;
  on_conflict?: Maybe<Rating_On_Conflict>;
};


export type Mutation_RootInsert_Result_TypeArgs = {
  objects: Array<Result_Type_Insert_Input>;
  on_conflict?: Maybe<Result_Type_On_Conflict>;
};


export type Mutation_RootInsert_TeamArgs = {
  objects: Array<Team_Insert_Input>;
  on_conflict?: Maybe<Team_On_Conflict>;
};


export type Mutation_RootUpdate_AppearanceArgs = {
  _inc?: Maybe<Appearance_Inc_Input>;
  _set?: Maybe<Appearance_Set_Input>;
  where: Appearance_Bool_Exp;
};


export type Mutation_RootUpdate_GameArgs = {
  _inc?: Maybe<Game_Inc_Input>;
  _set?: Maybe<Game_Set_Input>;
  where: Game_Bool_Exp;
};


export type Mutation_RootUpdate_MatchArgs = {
  _inc?: Maybe<Match_Inc_Input>;
  _set?: Maybe<Match_Set_Input>;
  where: Match_Bool_Exp;
};


export type Mutation_RootUpdate_PlayerArgs = {
  _inc?: Maybe<Player_Inc_Input>;
  _set?: Maybe<Player_Set_Input>;
  where: Player_Bool_Exp;
};


export type Mutation_RootUpdate_ProjectArgs = {
  _inc?: Maybe<Project_Inc_Input>;
  _set?: Maybe<Project_Set_Input>;
  where: Project_Bool_Exp;
};


export type Mutation_RootUpdate_RatingArgs = {
  _inc?: Maybe<Rating_Inc_Input>;
  _set?: Maybe<Rating_Set_Input>;
  where: Rating_Bool_Exp;
};


export type Mutation_RootUpdate_Result_TypeArgs = {
  _set?: Maybe<Result_Type_Set_Input>;
  where: Result_Type_Bool_Exp;
};


export type Mutation_RootUpdate_TeamArgs = {
  _inc?: Maybe<Team_Inc_Input>;
  _set?: Maybe<Team_Set_Input>;
  where: Team_Bool_Exp;
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Player = {
   __typename?: 'player';
  appearances: Array<Appearance>;
  appearances_aggregate: Appearance_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  project: Project;
  project_id: Scalars['Int'];
  ratings: Array<Rating>;
  ratings_aggregate: Rating_Aggregate;
  updated_at: Scalars['timestamptz'];
};


export type PlayerAppearancesArgs = {
  distinct_on?: Maybe<Array<Appearance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Appearance_Order_By>>;
  where?: Maybe<Appearance_Bool_Exp>;
};


export type PlayerAppearances_AggregateArgs = {
  distinct_on?: Maybe<Array<Appearance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Appearance_Order_By>>;
  where?: Maybe<Appearance_Bool_Exp>;
};


export type PlayerRatingsArgs = {
  distinct_on?: Maybe<Array<Rating_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Order_By>>;
  where?: Maybe<Rating_Bool_Exp>;
};


export type PlayerRatings_AggregateArgs = {
  distinct_on?: Maybe<Array<Rating_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Order_By>>;
  where?: Maybe<Rating_Bool_Exp>;
};

export type Player_Aggregate = {
   __typename?: 'player_aggregate';
  aggregate?: Maybe<Player_Aggregate_Fields>;
  nodes: Array<Player>;
};

export type Player_Aggregate_Fields = {
   __typename?: 'player_aggregate_fields';
  avg?: Maybe<Player_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Player_Max_Fields>;
  min?: Maybe<Player_Min_Fields>;
  stddev?: Maybe<Player_Stddev_Fields>;
  stddev_pop?: Maybe<Player_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Player_Stddev_Samp_Fields>;
  sum?: Maybe<Player_Sum_Fields>;
  var_pop?: Maybe<Player_Var_Pop_Fields>;
  var_samp?: Maybe<Player_Var_Samp_Fields>;
  variance?: Maybe<Player_Variance_Fields>;
};


export type Player_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Player_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Player_Aggregate_Order_By = {
  avg?: Maybe<Player_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Player_Max_Order_By>;
  min?: Maybe<Player_Min_Order_By>;
  stddev?: Maybe<Player_Stddev_Order_By>;
  stddev_pop?: Maybe<Player_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Player_Stddev_Samp_Order_By>;
  sum?: Maybe<Player_Sum_Order_By>;
  var_pop?: Maybe<Player_Var_Pop_Order_By>;
  var_samp?: Maybe<Player_Var_Samp_Order_By>;
  variance?: Maybe<Player_Variance_Order_By>;
};

export type Player_Arr_Rel_Insert_Input = {
  data: Array<Player_Insert_Input>;
  on_conflict?: Maybe<Player_On_Conflict>;
};

export type Player_Avg_Fields = {
   __typename?: 'player_avg_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

export type Player_Avg_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

export type Player_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Player_Bool_Exp>>>;
  _not?: Maybe<Player_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Player_Bool_Exp>>>;
  appearances?: Maybe<Appearance_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  project?: Maybe<Project_Bool_Exp>;
  project_id?: Maybe<Int_Comparison_Exp>;
  ratings?: Maybe<Rating_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Player_Constraint {
  PlayerPkey = 'player_pkey'
}

export type Player_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

export type Player_Insert_Input = {
  appearances?: Maybe<Appearance_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project?: Maybe<Project_Obj_Rel_Insert_Input>;
  project_id?: Maybe<Scalars['Int']>;
  ratings?: Maybe<Rating_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Player_Max_Fields = {
   __typename?: 'player_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Player_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Player_Min_Fields = {
   __typename?: 'player_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Player_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Player_Mutation_Response = {
   __typename?: 'player_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Player>;
};

export type Player_Obj_Rel_Insert_Input = {
  data: Player_Insert_Input;
  on_conflict?: Maybe<Player_On_Conflict>;
};

export type Player_On_Conflict = {
  constraint: Player_Constraint;
  update_columns: Array<Player_Update_Column>;
  where?: Maybe<Player_Bool_Exp>;
};

export type Player_Order_By = {
  appearances_aggregate?: Maybe<Appearance_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  project?: Maybe<Project_Order_By>;
  project_id?: Maybe<Order_By>;
  ratings_aggregate?: Maybe<Rating_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Player_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  ProjectId = 'project_id',
  UpdatedAt = 'updated_at'
}

export type Player_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  project_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Player_Stddev_Fields = {
   __typename?: 'player_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

export type Player_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

export type Player_Stddev_Pop_Fields = {
   __typename?: 'player_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

export type Player_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

export type Player_Stddev_Samp_Fields = {
   __typename?: 'player_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

export type Player_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

export type Player_Sum_Fields = {
   __typename?: 'player_sum_fields';
  id?: Maybe<Scalars['Int']>;
  project_id?: Maybe<Scalars['Int']>;
};

export type Player_Sum_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

export enum Player_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  ProjectId = 'project_id',
  UpdatedAt = 'updated_at'
}

export type Player_Var_Pop_Fields = {
   __typename?: 'player_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

export type Player_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

export type Player_Var_Samp_Fields = {
   __typename?: 'player_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

export type Player_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

export type Player_Variance_Fields = {
   __typename?: 'player_variance_fields';
  id?: Maybe<Scalars['Float']>;
  project_id?: Maybe<Scalars['Float']>;
};

export type Player_Variance_Order_By = {
  id?: Maybe<Order_By>;
  project_id?: Maybe<Order_By>;
};

export type Project = {
   __typename?: 'project';
  created_at: Scalars['timestamptz'];
  games: Array<Game>;
  games_aggregate: Game_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
  players: Array<Player>;
  players_aggregate: Player_Aggregate;
  updated_at: Scalars['timestamptz'];
};


export type ProjectGamesArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


export type ProjectGames_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


export type ProjectPlayersArgs = {
  distinct_on?: Maybe<Array<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};


export type ProjectPlayers_AggregateArgs = {
  distinct_on?: Maybe<Array<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};

export type Project_Aggregate = {
   __typename?: 'project_aggregate';
  aggregate?: Maybe<Project_Aggregate_Fields>;
  nodes: Array<Project>;
};

export type Project_Aggregate_Fields = {
   __typename?: 'project_aggregate_fields';
  avg?: Maybe<Project_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Project_Max_Fields>;
  min?: Maybe<Project_Min_Fields>;
  stddev?: Maybe<Project_Stddev_Fields>;
  stddev_pop?: Maybe<Project_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Project_Stddev_Samp_Fields>;
  sum?: Maybe<Project_Sum_Fields>;
  var_pop?: Maybe<Project_Var_Pop_Fields>;
  var_samp?: Maybe<Project_Var_Samp_Fields>;
  variance?: Maybe<Project_Variance_Fields>;
};


export type Project_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Project_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Project_Aggregate_Order_By = {
  avg?: Maybe<Project_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Project_Max_Order_By>;
  min?: Maybe<Project_Min_Order_By>;
  stddev?: Maybe<Project_Stddev_Order_By>;
  stddev_pop?: Maybe<Project_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Project_Stddev_Samp_Order_By>;
  sum?: Maybe<Project_Sum_Order_By>;
  var_pop?: Maybe<Project_Var_Pop_Order_By>;
  var_samp?: Maybe<Project_Var_Samp_Order_By>;
  variance?: Maybe<Project_Variance_Order_By>;
};

export type Project_Arr_Rel_Insert_Input = {
  data: Array<Project_Insert_Input>;
  on_conflict?: Maybe<Project_On_Conflict>;
};

export type Project_Avg_Fields = {
   __typename?: 'project_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Project_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

export type Project_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Project_Bool_Exp>>>;
  _not?: Maybe<Project_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Project_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  games?: Maybe<Game_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  players?: Maybe<Player_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Project_Constraint {
  ProjectPkey = 'project_pkey'
}

export type Project_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

export type Project_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  games?: Maybe<Game_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  players?: Maybe<Player_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Project_Max_Fields = {
   __typename?: 'project_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Project_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Project_Min_Fields = {
   __typename?: 'project_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Project_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Project_Mutation_Response = {
   __typename?: 'project_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Project>;
};

export type Project_Obj_Rel_Insert_Input = {
  data: Project_Insert_Input;
  on_conflict?: Maybe<Project_On_Conflict>;
};

export type Project_On_Conflict = {
  constraint: Project_Constraint;
  update_columns: Array<Project_Update_Column>;
  where?: Maybe<Project_Bool_Exp>;
};

export type Project_Order_By = {
  created_at?: Maybe<Order_By>;
  games_aggregate?: Maybe<Game_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  players_aggregate?: Maybe<Player_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Project_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type Project_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Project_Stddev_Fields = {
   __typename?: 'project_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Project_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

export type Project_Stddev_Pop_Fields = {
   __typename?: 'project_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Project_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Project_Stddev_Samp_Fields = {
   __typename?: 'project_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Project_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Project_Sum_Fields = {
   __typename?: 'project_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

export type Project_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

export enum Project_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type Project_Var_Pop_Fields = {
   __typename?: 'project_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Project_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

export type Project_Var_Samp_Fields = {
   __typename?: 'project_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Project_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

export type Project_Variance_Fields = {
   __typename?: 'project_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Project_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

export type Query_Root = {
   __typename?: 'query_root';
  appearance: Array<Appearance>;
  appearance_aggregate: Appearance_Aggregate;
  appearance_by_pk?: Maybe<Appearance>;
  game: Array<Game>;
  game_aggregate: Game_Aggregate;
  game_by_pk?: Maybe<Game>;
  match: Array<Match>;
  match_aggregate: Match_Aggregate;
  match_by_pk?: Maybe<Match>;
  player: Array<Player>;
  player_aggregate: Player_Aggregate;
  player_by_pk?: Maybe<Player>;
  project: Array<Project>;
  project_aggregate: Project_Aggregate;
  project_by_pk?: Maybe<Project>;
  rating: Array<Rating>;
  rating_aggregate: Rating_Aggregate;
  rating_by_pk?: Maybe<Rating>;
  result_type: Array<Result_Type>;
  result_type_aggregate: Result_Type_Aggregate;
  result_type_by_pk?: Maybe<Result_Type>;
  team: Array<Team>;
  team_aggregate: Team_Aggregate;
  team_by_pk?: Maybe<Team>;
};


export type Query_RootAppearanceArgs = {
  distinct_on?: Maybe<Array<Appearance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Appearance_Order_By>>;
  where?: Maybe<Appearance_Bool_Exp>;
};


export type Query_RootAppearance_AggregateArgs = {
  distinct_on?: Maybe<Array<Appearance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Appearance_Order_By>>;
  where?: Maybe<Appearance_Bool_Exp>;
};


export type Query_RootAppearance_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootGameArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


export type Query_RootGame_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


export type Query_RootGame_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootMatchArgs = {
  distinct_on?: Maybe<Array<Match_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Match_Order_By>>;
  where?: Maybe<Match_Bool_Exp>;
};


export type Query_RootMatch_AggregateArgs = {
  distinct_on?: Maybe<Array<Match_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Match_Order_By>>;
  where?: Maybe<Match_Bool_Exp>;
};


export type Query_RootMatch_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Query_RootPlayerArgs = {
  distinct_on?: Maybe<Array<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};


export type Query_RootPlayer_AggregateArgs = {
  distinct_on?: Maybe<Array<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};


export type Query_RootPlayer_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootProjectArgs = {
  distinct_on?: Maybe<Array<Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Order_By>>;
  where?: Maybe<Project_Bool_Exp>;
};


export type Query_RootProject_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Order_By>>;
  where?: Maybe<Project_Bool_Exp>;
};


export type Query_RootProject_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRatingArgs = {
  distinct_on?: Maybe<Array<Rating_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Order_By>>;
  where?: Maybe<Rating_Bool_Exp>;
};


export type Query_RootRating_AggregateArgs = {
  distinct_on?: Maybe<Array<Rating_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Order_By>>;
  where?: Maybe<Rating_Bool_Exp>;
};


export type Query_RootRating_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootResult_TypeArgs = {
  distinct_on?: Maybe<Array<Result_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Result_Type_Order_By>>;
  where?: Maybe<Result_Type_Bool_Exp>;
};


export type Query_RootResult_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Result_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Result_Type_Order_By>>;
  where?: Maybe<Result_Type_Bool_Exp>;
};


export type Query_RootResult_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootTeamArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


export type Query_RootTeam_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


export type Query_RootTeam_By_PkArgs = {
  id: Scalars['Int'];
};

export type Rating = {
   __typename?: 'rating';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  match: Match;
  match_uuid: Scalars['uuid'];
  player: Player;
  player_id: Scalars['Int'];
  rating: Scalars['Int'];
  rating_before: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};

export type Rating_Aggregate = {
   __typename?: 'rating_aggregate';
  aggregate?: Maybe<Rating_Aggregate_Fields>;
  nodes: Array<Rating>;
};

export type Rating_Aggregate_Fields = {
   __typename?: 'rating_aggregate_fields';
  avg?: Maybe<Rating_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Rating_Max_Fields>;
  min?: Maybe<Rating_Min_Fields>;
  stddev?: Maybe<Rating_Stddev_Fields>;
  stddev_pop?: Maybe<Rating_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rating_Stddev_Samp_Fields>;
  sum?: Maybe<Rating_Sum_Fields>;
  var_pop?: Maybe<Rating_Var_Pop_Fields>;
  var_samp?: Maybe<Rating_Var_Samp_Fields>;
  variance?: Maybe<Rating_Variance_Fields>;
};


export type Rating_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rating_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Rating_Aggregate_Order_By = {
  avg?: Maybe<Rating_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Rating_Max_Order_By>;
  min?: Maybe<Rating_Min_Order_By>;
  stddev?: Maybe<Rating_Stddev_Order_By>;
  stddev_pop?: Maybe<Rating_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Rating_Stddev_Samp_Order_By>;
  sum?: Maybe<Rating_Sum_Order_By>;
  var_pop?: Maybe<Rating_Var_Pop_Order_By>;
  var_samp?: Maybe<Rating_Var_Samp_Order_By>;
  variance?: Maybe<Rating_Variance_Order_By>;
};

export type Rating_Arr_Rel_Insert_Input = {
  data: Array<Rating_Insert_Input>;
  on_conflict?: Maybe<Rating_On_Conflict>;
};

export type Rating_Avg_Fields = {
   __typename?: 'rating_avg_fields';
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  rating_before?: Maybe<Scalars['Float']>;
};

export type Rating_Avg_Order_By = {
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  rating_before?: Maybe<Order_By>;
};

export type Rating_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Rating_Bool_Exp>>>;
  _not?: Maybe<Rating_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Rating_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  match?: Maybe<Match_Bool_Exp>;
  match_uuid?: Maybe<Uuid_Comparison_Exp>;
  player?: Maybe<Player_Bool_Exp>;
  player_id?: Maybe<Int_Comparison_Exp>;
  rating?: Maybe<Int_Comparison_Exp>;
  rating_before?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Rating_Constraint {
  RatingPkey = 'rating_pkey',
  RatingPlayerIdMatchUuidKey = 'rating_player_id_match_uuid_key'
}

export type Rating_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  rating_before?: Maybe<Scalars['Int']>;
};

export type Rating_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  match?: Maybe<Match_Obj_Rel_Insert_Input>;
  match_uuid?: Maybe<Scalars['uuid']>;
  player?: Maybe<Player_Obj_Rel_Insert_Input>;
  player_id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  rating_before?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Rating_Max_Fields = {
   __typename?: 'rating_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  rating_before?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Rating_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  rating_before?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Rating_Min_Fields = {
   __typename?: 'rating_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  rating_before?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Rating_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  rating_before?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Rating_Mutation_Response = {
   __typename?: 'rating_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Rating>;
};

export type Rating_Obj_Rel_Insert_Input = {
  data: Rating_Insert_Input;
  on_conflict?: Maybe<Rating_On_Conflict>;
};

export type Rating_On_Conflict = {
  constraint: Rating_Constraint;
  update_columns: Array<Rating_Update_Column>;
  where?: Maybe<Rating_Bool_Exp>;
};

export type Rating_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  match?: Maybe<Match_Order_By>;
  match_uuid?: Maybe<Order_By>;
  player?: Maybe<Player_Order_By>;
  player_id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  rating_before?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Rating_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  MatchUuid = 'match_uuid',
  PlayerId = 'player_id',
  Rating = 'rating',
  RatingBefore = 'rating_before',
  UpdatedAt = 'updated_at'
}

export type Rating_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  match_uuid?: Maybe<Scalars['uuid']>;
  player_id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  rating_before?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Rating_Stddev_Fields = {
   __typename?: 'rating_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  rating_before?: Maybe<Scalars['Float']>;
};

export type Rating_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  rating_before?: Maybe<Order_By>;
};

export type Rating_Stddev_Pop_Fields = {
   __typename?: 'rating_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  rating_before?: Maybe<Scalars['Float']>;
};

export type Rating_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  rating_before?: Maybe<Order_By>;
};

export type Rating_Stddev_Samp_Fields = {
   __typename?: 'rating_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  rating_before?: Maybe<Scalars['Float']>;
};

export type Rating_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  rating_before?: Maybe<Order_By>;
};

export type Rating_Sum_Fields = {
   __typename?: 'rating_sum_fields';
  id?: Maybe<Scalars['Int']>;
  player_id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  rating_before?: Maybe<Scalars['Int']>;
};

export type Rating_Sum_Order_By = {
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  rating_before?: Maybe<Order_By>;
};

export enum Rating_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  MatchUuid = 'match_uuid',
  PlayerId = 'player_id',
  Rating = 'rating',
  RatingBefore = 'rating_before',
  UpdatedAt = 'updated_at'
}

export type Rating_Var_Pop_Fields = {
   __typename?: 'rating_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  rating_before?: Maybe<Scalars['Float']>;
};

export type Rating_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  rating_before?: Maybe<Order_By>;
};

export type Rating_Var_Samp_Fields = {
   __typename?: 'rating_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  rating_before?: Maybe<Scalars['Float']>;
};

export type Rating_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  rating_before?: Maybe<Order_By>;
};

export type Rating_Variance_Fields = {
   __typename?: 'rating_variance_fields';
  id?: Maybe<Scalars['Float']>;
  player_id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  rating_before?: Maybe<Scalars['Float']>;
};

export type Rating_Variance_Order_By = {
  id?: Maybe<Order_By>;
  player_id?: Maybe<Order_By>;
  rating?: Maybe<Order_By>;
  rating_before?: Maybe<Order_By>;
};

export type Result_Type = {
   __typename?: 'result_type';
  value: Scalars['String'];
};

export type Result_Type_Aggregate = {
   __typename?: 'result_type_aggregate';
  aggregate?: Maybe<Result_Type_Aggregate_Fields>;
  nodes: Array<Result_Type>;
};

export type Result_Type_Aggregate_Fields = {
   __typename?: 'result_type_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Result_Type_Max_Fields>;
  min?: Maybe<Result_Type_Min_Fields>;
};


export type Result_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Result_Type_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Result_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Result_Type_Max_Order_By>;
  min?: Maybe<Result_Type_Min_Order_By>;
};

export type Result_Type_Arr_Rel_Insert_Input = {
  data: Array<Result_Type_Insert_Input>;
  on_conflict?: Maybe<Result_Type_On_Conflict>;
};

export type Result_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Result_Type_Bool_Exp>>>;
  _not?: Maybe<Result_Type_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Result_Type_Bool_Exp>>>;
  value?: Maybe<String_Comparison_Exp>;
};

export enum Result_Type_Constraint {
  ResultTypePkey = 'result_type_pkey'
}

export enum Result_Type_Enum {
  Draw = 'DRAW',
  Loss = 'LOSS',
  Win = 'WIN'
}

export type Result_Type_Enum_Comparison_Exp = {
  _eq?: Maybe<Result_Type_Enum>;
  _in?: Maybe<Array<Result_Type_Enum>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Result_Type_Enum>;
  _nin?: Maybe<Array<Result_Type_Enum>>;
};

export type Result_Type_Insert_Input = {
  value?: Maybe<Scalars['String']>;
};

export type Result_Type_Max_Fields = {
   __typename?: 'result_type_max_fields';
  value?: Maybe<Scalars['String']>;
};

export type Result_Type_Max_Order_By = {
  value?: Maybe<Order_By>;
};

export type Result_Type_Min_Fields = {
   __typename?: 'result_type_min_fields';
  value?: Maybe<Scalars['String']>;
};

export type Result_Type_Min_Order_By = {
  value?: Maybe<Order_By>;
};

export type Result_Type_Mutation_Response = {
   __typename?: 'result_type_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Result_Type>;
};

export type Result_Type_Obj_Rel_Insert_Input = {
  data: Result_Type_Insert_Input;
  on_conflict?: Maybe<Result_Type_On_Conflict>;
};

export type Result_Type_On_Conflict = {
  constraint: Result_Type_Constraint;
  update_columns: Array<Result_Type_Update_Column>;
  where?: Maybe<Result_Type_Bool_Exp>;
};

export type Result_Type_Order_By = {
  value?: Maybe<Order_By>;
};

export enum Result_Type_Select_Column {
  Value = 'value'
}

export type Result_Type_Set_Input = {
  value?: Maybe<Scalars['String']>;
};

export enum Result_Type_Update_Column {
  Value = 'value'
}

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
   __typename?: 'subscription_root';
  appearance: Array<Appearance>;
  appearance_aggregate: Appearance_Aggregate;
  appearance_by_pk?: Maybe<Appearance>;
  game: Array<Game>;
  game_aggregate: Game_Aggregate;
  game_by_pk?: Maybe<Game>;
  match: Array<Match>;
  match_aggregate: Match_Aggregate;
  match_by_pk?: Maybe<Match>;
  player: Array<Player>;
  player_aggregate: Player_Aggregate;
  player_by_pk?: Maybe<Player>;
  project: Array<Project>;
  project_aggregate: Project_Aggregate;
  project_by_pk?: Maybe<Project>;
  rating: Array<Rating>;
  rating_aggregate: Rating_Aggregate;
  rating_by_pk?: Maybe<Rating>;
  result_type: Array<Result_Type>;
  result_type_aggregate: Result_Type_Aggregate;
  result_type_by_pk?: Maybe<Result_Type>;
  team: Array<Team>;
  team_aggregate: Team_Aggregate;
  team_by_pk?: Maybe<Team>;
};


export type Subscription_RootAppearanceArgs = {
  distinct_on?: Maybe<Array<Appearance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Appearance_Order_By>>;
  where?: Maybe<Appearance_Bool_Exp>;
};


export type Subscription_RootAppearance_AggregateArgs = {
  distinct_on?: Maybe<Array<Appearance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Appearance_Order_By>>;
  where?: Maybe<Appearance_Bool_Exp>;
};


export type Subscription_RootAppearance_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootGameArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


export type Subscription_RootGame_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Order_By>>;
  where?: Maybe<Game_Bool_Exp>;
};


export type Subscription_RootGame_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootMatchArgs = {
  distinct_on?: Maybe<Array<Match_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Match_Order_By>>;
  where?: Maybe<Match_Bool_Exp>;
};


export type Subscription_RootMatch_AggregateArgs = {
  distinct_on?: Maybe<Array<Match_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Match_Order_By>>;
  where?: Maybe<Match_Bool_Exp>;
};


export type Subscription_RootMatch_By_PkArgs = {
  uuid: Scalars['uuid'];
};


export type Subscription_RootPlayerArgs = {
  distinct_on?: Maybe<Array<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};


export type Subscription_RootPlayer_AggregateArgs = {
  distinct_on?: Maybe<Array<Player_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Player_Order_By>>;
  where?: Maybe<Player_Bool_Exp>;
};


export type Subscription_RootPlayer_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProjectArgs = {
  distinct_on?: Maybe<Array<Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Order_By>>;
  where?: Maybe<Project_Bool_Exp>;
};


export type Subscription_RootProject_AggregateArgs = {
  distinct_on?: Maybe<Array<Project_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Project_Order_By>>;
  where?: Maybe<Project_Bool_Exp>;
};


export type Subscription_RootProject_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRatingArgs = {
  distinct_on?: Maybe<Array<Rating_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Order_By>>;
  where?: Maybe<Rating_Bool_Exp>;
};


export type Subscription_RootRating_AggregateArgs = {
  distinct_on?: Maybe<Array<Rating_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rating_Order_By>>;
  where?: Maybe<Rating_Bool_Exp>;
};


export type Subscription_RootRating_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootResult_TypeArgs = {
  distinct_on?: Maybe<Array<Result_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Result_Type_Order_By>>;
  where?: Maybe<Result_Type_Bool_Exp>;
};


export type Subscription_RootResult_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Result_Type_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Result_Type_Order_By>>;
  where?: Maybe<Result_Type_Bool_Exp>;
};


export type Subscription_RootResult_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootTeamArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


export type Subscription_RootTeam_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


export type Subscription_RootTeam_By_PkArgs = {
  id: Scalars['Int'];
};

export type Team = {
   __typename?: 'team';
  appearances: Array<Appearance>;
  appearances_aggregate: Appearance_Aggregate;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  match: Match;
  match_uuid: Scalars['uuid'];
  result: Result_Type_Enum;
  score: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};


export type TeamAppearancesArgs = {
  distinct_on?: Maybe<Array<Appearance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Appearance_Order_By>>;
  where?: Maybe<Appearance_Bool_Exp>;
};


export type TeamAppearances_AggregateArgs = {
  distinct_on?: Maybe<Array<Appearance_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Appearance_Order_By>>;
  where?: Maybe<Appearance_Bool_Exp>;
};

export type Team_Aggregate = {
   __typename?: 'team_aggregate';
  aggregate?: Maybe<Team_Aggregate_Fields>;
  nodes: Array<Team>;
};

export type Team_Aggregate_Fields = {
   __typename?: 'team_aggregate_fields';
  avg?: Maybe<Team_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Team_Max_Fields>;
  min?: Maybe<Team_Min_Fields>;
  stddev?: Maybe<Team_Stddev_Fields>;
  stddev_pop?: Maybe<Team_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Team_Stddev_Samp_Fields>;
  sum?: Maybe<Team_Sum_Fields>;
  var_pop?: Maybe<Team_Var_Pop_Fields>;
  var_samp?: Maybe<Team_Var_Samp_Fields>;
  variance?: Maybe<Team_Variance_Fields>;
};


export type Team_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Team_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Team_Aggregate_Order_By = {
  avg?: Maybe<Team_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Team_Max_Order_By>;
  min?: Maybe<Team_Min_Order_By>;
  stddev?: Maybe<Team_Stddev_Order_By>;
  stddev_pop?: Maybe<Team_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Team_Stddev_Samp_Order_By>;
  sum?: Maybe<Team_Sum_Order_By>;
  var_pop?: Maybe<Team_Var_Pop_Order_By>;
  var_samp?: Maybe<Team_Var_Samp_Order_By>;
  variance?: Maybe<Team_Variance_Order_By>;
};

export type Team_Arr_Rel_Insert_Input = {
  data: Array<Team_Insert_Input>;
  on_conflict?: Maybe<Team_On_Conflict>;
};

export type Team_Avg_Fields = {
   __typename?: 'team_avg_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Team_Avg_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Team_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Team_Bool_Exp>>>;
  _not?: Maybe<Team_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Team_Bool_Exp>>>;
  appearances?: Maybe<Appearance_Bool_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  match?: Maybe<Match_Bool_Exp>;
  match_uuid?: Maybe<Uuid_Comparison_Exp>;
  result?: Maybe<Result_Type_Enum_Comparison_Exp>;
  score?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Team_Constraint {
  TeamPkey = 'team_pkey'
}

export type Team_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
};

export type Team_Insert_Input = {
  appearances?: Maybe<Appearance_Arr_Rel_Insert_Input>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  match?: Maybe<Match_Obj_Rel_Insert_Input>;
  match_uuid?: Maybe<Scalars['uuid']>;
  result?: Maybe<Result_Type_Enum>;
  score?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Team_Max_Fields = {
   __typename?: 'team_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Team_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Team_Min_Fields = {
   __typename?: 'team_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Team_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type Team_Mutation_Response = {
   __typename?: 'team_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Team>;
};

export type Team_Obj_Rel_Insert_Input = {
  data: Team_Insert_Input;
  on_conflict?: Maybe<Team_On_Conflict>;
};

export type Team_On_Conflict = {
  constraint: Team_Constraint;
  update_columns: Array<Team_Update_Column>;
  where?: Maybe<Team_Bool_Exp>;
};

export type Team_Order_By = {
  appearances_aggregate?: Maybe<Appearance_Aggregate_Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  match?: Maybe<Match_Order_By>;
  match_uuid?: Maybe<Order_By>;
  result?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export enum Team_Select_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  MatchUuid = 'match_uuid',
  Result = 'result',
  Score = 'score',
  UpdatedAt = 'updated_at'
}

export type Team_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  match_uuid?: Maybe<Scalars['uuid']>;
  result?: Maybe<Result_Type_Enum>;
  score?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type Team_Stddev_Fields = {
   __typename?: 'team_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Team_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Team_Stddev_Pop_Fields = {
   __typename?: 'team_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Team_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Team_Stddev_Samp_Fields = {
   __typename?: 'team_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Team_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Team_Sum_Fields = {
   __typename?: 'team_sum_fields';
  id?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
};

export type Team_Sum_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export enum Team_Update_Column {
  CreatedAt = 'created_at',
  Id = 'id',
  MatchUuid = 'match_uuid',
  Result = 'result',
  Score = 'score',
  UpdatedAt = 'updated_at'
}

export type Team_Var_Pop_Fields = {
   __typename?: 'team_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Team_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Team_Var_Samp_Fields = {
   __typename?: 'team_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Team_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};

export type Team_Variance_Fields = {
   __typename?: 'team_variance_fields';
  id?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
};

export type Team_Variance_Order_By = {
  id?: Maybe<Order_By>;
  score?: Maybe<Order_By>;
};


export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type AddRatingsMutationVariables = {
  ratings: Array<Rating_Insert_Input>;
};


export type AddRatingsMutation = (
  { __typename?: 'mutation_root' }
  & { insert_rating: Maybe<(
    { __typename?: 'rating_mutation_response' }
    & Pick<Rating_Mutation_Response, 'affected_rows'>
  )> }
);

export type PlayerRatingByGameQueryVariables = {
  playerId: Scalars['Int'];
  gameId: Scalars['Int'];
  date: Scalars['timestamptz'];
};


export type PlayerRatingByGameQuery = (
  { __typename?: 'query_root' }
  & { rating: Array<(
    { __typename?: 'rating' }
    & Pick<Rating, 'rating'>
  )> }
);

export type MatchesQueryVariables = {};


export type MatchesQuery = (
  { __typename?: 'query_root' }
  & { match: Array<(
    { __typename?: 'match' }
    & Pick<Match, 'uuid' | 'date' | 'game_id'>
    & { teams: Array<(
      { __typename?: 'team' }
      & Pick<Team, 'id' | 'result' | 'score'>
      & { appearances: Array<(
        { __typename?: 'appearance' }
        & Pick<Appearance, 'player_id'>
      )> }
    )> }
  )> }
);
