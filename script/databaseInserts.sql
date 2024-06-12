insert into card(card_name, card_damage, card_description) values('Thunderstorm', 10, '| 10 damage to all characters of the opponent');
insert into card(card_name, card_damage, card_description) values('Puke in the Bathroom', null, "| The opponent is blocked from playing for 2 turns");
insert into card(card_name, card_damage, card_description) values('Shhhhhhh', null, "| The opponent is blocked from playing for 1 turn");
insert into card(card_name, card_damage, card_description) values('Glass on the floor', 5, '| Gives 5 damage for 2 rounds to the characters of the opponent');
insert into card(card_name, card_damage, card_description) values('Finish Him', 100, '| 100 damage to one character of the opponent of your choice');
insert into card(card_name, card_damage, card_description) values('Cops', null, "| The opponent is blocked from playing for 1 turn");
insert into card(card_name, card_damage, card_description) values('Holy Water', null, '| Counter of finish him card');
insert into card(card_name, card_damage, card_description) values('Sleeping Beauty', 25, '| The opponent is blocked from playing for 1 turn and gives 10 damage to 2 characters of the opponent of your choice');
insert into card(card_name, card_damage, card_description) values('Fountain of Youth', null, '| Revive one character at your choice with 1/3 of his HP');
insert into card(card_name, card_damage, card_description) values('Drunken Power', null, '| 1 character can attack 2 characters of the opponent of your choice');
-- ----------------------------------------------------------------------------------------------------------------------------------
insert into caracter(caracter_name, caracter_HP, caracter_attack, caracter_range, caracter_description) values('Madame Crisalda', 100, 3, 'close-range', 'Stabs the enemy with her high heel');
insert into caracter(caracter_name, caracter_HP, caracter_attack, caracter_range, caracter_description) values('Mafia Zombie', 100, 4, 'close-range', 'If the enemy is near, he can be hit by brass knuckles');
insert into caracter(caracter_name, caracter_HP, caracter_attack, caracter_range, caracter_description) values('Mister Frank', 100, 8, 'close-range', 'Hits with a baseball bat');
insert into caracter(caracter_name, caracter_HP, caracter_attack, caracter_range, caracter_description) values('Panda', 200, 4, 'close-range', 'It will gently scratch the enemy with its claws');
insert into caracter(caracter_name, caracter_HP, caracter_attack, caracter_range, caracter_description) values('João Pardal', 100, 3, 'close-range', 'Hits slightly with a plastic sword');
insert into caracter(caracter_name, caracter_HP, caracter_attack, caracter_range, caracter_description) values('Velho Louco', 100, 8, 'long-range', 'Spits alcohol on fire');
insert into caracter(caracter_name, caracter_HP, caracter_attack, caracter_range, caracter_description) values('Big Billy', 200, 3, 'long-range', 'Throws a hot burrito');
insert into caracter(caracter_name, caracter_HP, caracter_attack, caracter_range, caracter_description) values('Águosto', 100, 6, 'long-range', 'Throws lemons');
insert into caracter(caracter_name, caracter_HP, caracter_attack, caracter_range, caracter_description) values('Txuki', 100, 4, 'long-range', 'Throws a banner');
insert into caracter(caracter_name, caracter_HP, caracter_attack, caracter_range, caracter_description) values('Sandrinho', 100, 4, 'long-range', 'Throws Caco cakes');
-- ----------------------------------------------------------------------------------------------
insert into tile(tile_x, tile_y) values(0, 0);
insert into tile(tile_x, tile_y) values(1, 0);
insert into tile(tile_x, tile_y) values(2, 0);
insert into tile(tile_x, tile_y) values(3, 0);
insert into tile(tile_x, tile_y) values(4, 0);
-- --------------------------------------------
insert into matchState(match_state_name) values ("in queue");
insert into matchState(match_state_name) values ("on going");
insert into matchState(match_state_name) values ("finished");
-- --------------------------------------------------------------
insert into player(player_username, player_email, player_password) values ("barbali", "barbali_2345@gmail.com", "5994471abb01112afcc18159f6cc74b4f511b99806da59b3caf5a9c173cacfc5");
insert into player(player_username, player_email, player_password) values ("culiqui", "culiqui_123@gmail.com", "499bc7df9d8873c1c38e6898177c343b2a34d2eb43178a9eb4efcb993366c8cd");
-- -----------------------------------------------------------------------------------------------------------------------
insert into characterStatus(character_status_name) values ("ready");
insert into characterStatus(character_status_name) values ("not ready");
-- ----------------------------------------------------------------------
insert into deckCardState(deck_card_state_name) values ("on deck");
insert into deckCardState(deck_card_state_name) values ("in hand");
insert into deckCardState(deck_card_state_name) values ("on graveyard");
-- ----------------------------------------------------------------------
insert into playerCharacter(player_character_player_id, player_character_character_id) values (1, 1);
insert into playerCharacter(player_character_player_id, player_character_character_id) values (1, 10);
insert into playerCharacter(player_character_player_id, player_character_character_id) values (1, 2);
insert into playerCharacter(player_character_player_id, player_character_character_id) values (1, 9);
insert into playerCharacter(player_character_player_id, player_character_character_id) values (1, 3);

insert into playerCharacter(player_character_player_id, player_character_character_id) values (2, 4);
insert into playerCharacter(player_character_player_id, player_character_character_id) values (2, 5);
insert into playerCharacter(player_character_player_id, player_character_character_id) values (2, 6);
insert into playerCharacter(player_character_player_id, player_character_character_id) values (2, 7);
insert into playerCharacter(player_character_player_id, player_character_character_id) values (2, 8);
-- ----------------------------------------------------------------------------------------------------