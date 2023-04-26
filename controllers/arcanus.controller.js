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