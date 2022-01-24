savedList = []

module.exports = {
save: (req,res)=>{
    savedList.push(req.body.name)
    savedList.sort()
    console.log(savedList)
    res.status(200).send(savedList)},

getsaved: (req ,res)=>{
    res.status(200).send(savedList)}
}