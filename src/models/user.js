import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  nama: String,
  noHp: String,
  jumlahPenumpang: Number,
  rute: String,
  tanggal: Date,
  maskapai: String,
  jamTerbangDarat: String,
  alamatTujuan: String,
  alamatJemput: String,
});

userSchema.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();
  return_.pick(userObject, ['nama, noHp, jumlahPenumpang, rute, tanggal, maskapai, jamTerbangDarat, alamatTujuan, alamatJemput']);
}

//userSchema.pre('save', function (next)
  //const user = this;
//);

const user = mongoose.model('user', userSchema);

export default user;
