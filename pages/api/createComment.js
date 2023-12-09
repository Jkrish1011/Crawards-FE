// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    try{
        const {id , name, email, comment } = JSON.parse(req.body);
        console.log({id , name, email, comment });
    }catch(err){
        return res.status(500).json({message: `Couldn't submit comment`, err})
    }
    return res.status(200).json({message: "Comment Submitted"})
}
  