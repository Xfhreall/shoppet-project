// import { NextRequest, NextResponse } from 'next/server';
// import { v4 as uuidv4 } from 'uuid';

// export function POST(req: NextRequest,res: NextResponse){
//     const { name, price, description } = req.body;
//     const id = uuidv4();
//     const image = req.file ? req.file.filename : null;

//     db.query("SELECT * FROM product WHERE name = ?", [name], (err, result) => {
//       if (err) {
//         return response().error(res, err);
//       }
//       if (result.length > 0) {
//         return response().error(res, "Nama produk telah digunakan sebelumnya");
//       }
//       const sql = `INSERT INTO product (id, name, price, description, image) VALUES ('${id}', '${name}', ${price}, '${description}', '${image}')`;
//       db.query(sql, (err, result) => {
//         if (err) {
//           return response().error(res, err);
//         }
//         if (result?.affectedRows) {
//           response().success(res, result.insertID, "Produk berhasil ditambahkan");
//         }
//       });
//     });
// }
