// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const DATABASE_URL = process.env.DATABASE_URL;
export default (req, res) => {
    // if (req.method === 'POST') { // Add new game
        
    // } else {
    //     // Handle any other HTTP method
    // }
    res.status(200).json({ name: DATABASE_URL })
}
  