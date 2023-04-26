const db = require("../dbconnection");

module.exports.getArcanus = async (req, res) => {
    let qry = `SELECT ac.*, at.streight, at.dexterity, at.life, at.charisma, at.manipulation, at.apearence, at.perception, `+
              `at.intelligence, at.reasoning FROM ARCANUS AC INNER JOIN ATTRIBUTES AT ON ac.id = at.arcanusid ` +
              `WHERE ac.userid = ${req.body.userId}`;
    
        db.query(qry, async (err, result) => {
            if (err) {
                res.send({
                    status: false,
                    msg: err
                });

                return;
            }

            res.send({
                status: true,
                result: result.rows[0]
            });
    });
}

module.exports.setArcanus = async (req, res) => {
    let valid = `SELECT * FROM ARCANUS WHERE userid = ${req.body.userId}`;

    db.query(valid, async(err, result) => {
        if (err) {
            res.send({
                status: false,
                msg: err
            });

            return;
        }

        if (result.rows.length > 0) { //update
            let upd = `UPDATE ARCANUS SET char='${req.body.char}', class='${req.body.class}', chronicle= '${req.body.chronicle}', ` +
              `xp = ${req.body.xp}, background = '${req.body.background}' WHERE id = ${req.body.arcanusId}`;

            db.query(upd, async (err) => {
                if (err) {
                    res.send({
                        status: false,
                        msg: err
                    });

                    return;
                }

                let attr = `UPDATE ATTRIBUTES SET streight = ${req.body.streight}, dexterity = ${req.body.dexterity}, life = ${req.body.life}, ` +
                        `charisma = ${req.body.charisma}, manipulation = ${req.body.manipulation}, apearence = ${req.body.apearence}, ` +
                        `perception = ${req.body.perception}, intelligence = ${req.body.intelligence}, reasoning = ${req.body.reasoning} ` +
                        `WHERE arcanusid = ${req.body.arcanusId}`;

                db.query(attr, async (err) => {
                    if (err) {
                        res.send({
                            status: false,
                            msg: err
                        });

                        return;
                    }

                    res.send({
                        status: true,
                        msg: "Personagem a atributos atualizados com sucesso!"
                    });
                });
            });
        } else { //insert
            let ist = `with first as (INSERT INTO ARCANUS (userid, char, class, chronicle, xp, background) VALUES (` +
              `${req.body.userId}, '${req.body.char}', '${req.body.class}', '${req.body.chronicle}', ${req.body.xp}, '${req.body.background}') RETURNING id), `+
              `second as (INSERT INTO ATTRIBUTES (arcanusid, streight, dexterity, life, charisma, manipulation, apearence, ` +
              `perception, intelligence, reasoning) VALUES ((select id from first), ${req.body.streight}, ` +
              `${req.body.dexterity}, ${req.body.life}, ${req.body.charisma}, ${req.body.manipulation}, ` +
              `${req.body.apearence}, ${req.body.perception}, ${req.body.intelligence}, ${req.body.reasoning}) RETURNING arcanusid) ` +
              `INSERT INTO OTHERS (arcanusid, sanity, mana, lifepoints, bruised, hurted, injured, seriously, beaten, crippled, ` +
              `incapacitated, unconscious) VALUES ((select arcanusid from second), 20, 20, 20, false, false, false, false, false, false, ` +
              `false, false);`;

            db.query(ist, async (err) => {
                if (err) {
                    res.send({
                        status: false,
                        msg: err
                    });

                    return;
                }

                res.send({
                    status: true,
                    msg: 'Personagem cadastrado!'
                });
            });
        }
    });
}

module.exports.getSkills = async (req, res) => {
    let qry = `SELECT S.* FROM SKILLS S INNER JOIN ARCANUS A ON S.arcanusid = A.id WHERE A.userid = ${req.body.userId}`;

    db.query(qry, async (err, result) => {
        if (err) {
            res.send({
                status: false,
                msg: err
            });

            return;
        }

        if (result.rows.length > 0) {
            res.send({
                status: true,
                result: result.rows[0]
            });
        } else {
            res.send({
                status: false,
                msg: 'Nenhuma skill encontrada para o char!'
            });
        }
    });
}

module.exports.setSkills = async (req, res) => {
    let arcanus = `SELECT * FROM SKILLS WHERE arcanusId = ${req.body.arcanusId}`;

    db.query(arcanus, async (err, result) => {
        if (err) {
            res.send({
                status: false,
                msg: err
            });

            return;
        }

        if (result.rows.length > 0) { //update skills
            let upd = `UPDATE SKILLS SET readness = ${req.body.readness}, sports = ${req.body.sports}, fight = ${req.body.fight}, ` +
                     `dodge = ${req.body.dodge}, empath = ${req.body.empath}, expression = ${req.body.expression}, ` +
                     `intimidation = ${req.body.intimidation}, leadership = ${req.body.leadership}, ruse = ${req.body.ruse}, ` +
                     `lip = ${req.body.lip}, animalempath = ${req.body.animalEmpath}, trades = ${req.body.trades}, ` +
                     `conduction = ${req.body.conduction}, tag = ${req.body.tag}, firegun = ${req.body.fireGun}, ` +
                     `whitearms = ${req.body.whiteArms}, perform = ${req.body.perform}, security = ${req.body.security}, ` +
                     `stealth = ${req.body.stealth}, survivor = ${req.body.survivor}, academic = ${req.body.academic}, ` +
                     `it = ${req.body.it}, financial = ${req.body.financial}, investigation = ${req.body.investigation}, ` +
                     `legal = ${req.body.legal}, language = ${req.body.language}, medicine = ${req.body.medicine}, ` +
                     `pagan = ${req.body.pagan}, government = ${req.body.government}, science = ${req.body.science} ` +
                     `WHERE arcanusid = ${req.body.arcanusId}`;

            db.query(upd, async (err) => {
                if (err) {
                    res.send({
                        status: false,
                        msg: err
                    });
        
                    return;
                }

                res.send({
                    status: true,
                    msg: 'Habilidades alteradas com sucesso!'
                });
            });
        } else { //insert skills
            let ist = `INSERT INTO SKILLS (readness, sports, fight, dodge, empath, expression, intimidation, leadership, ruse, ` +
                      `lip, animalempath, trades, conduction, tag, firegun, whitearms, perform, security, stealth, survivor, ` +
                      `academic, it, financial, investigation, legal, language, medicine, pagan, government, science, arcanusid) VALUES (` +
                      `${req.body.readness}, ${req.body.sports}, ${req.body.fight}, ${req.body.dodge}, ${req.body.empath}, ` +
                      `${req.body.expression}, ${req.body.intimidation}, ${req.body.leadership}, ${req.body.ruse}, ${req.body.lip}, ` +
                      `${req.body.animalEmpath}, ${req.body.trades}, ${req.body.conduction}, ${req.body.tag}, ${req.body.fireGun}, ` +
                      `${req.body.whiteArms}, ${req.body.perform}, ${req.body.security}, ${req.body.stealth}, ${req.body.survivor}, ` +
                      `${req.body.academic}, ${req.body.it}, ${req.body.financial}, ${req.body.investigation}, ${req.body.legal}, ` +
                      `${req.body.language}, ${req.body.medicine}, ${req.body.pagan}, ${req.body.government}, ${req.body.science}, ` +
                      `${req.body.arcanusId})`;

            db.query(ist, async (err) => {
                if (err) {
                    res.send({
                        status: false,
                        msg: err
                    });
        
                    return;
                }

                res.send({
                    status: true,
                    msg: 'Habilidades incluídas com sucesso!'
                });
            });
        }
    });
}