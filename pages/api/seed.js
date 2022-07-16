import User from '../../models/User';
import db from '../../utilis/db';
import data from '../../utilis/data';
import Product from '../../models/Product';
const handler = async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
};
export default handler;
