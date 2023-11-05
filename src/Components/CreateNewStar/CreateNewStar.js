import React, { useState } from "react";
import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:9000/directors";

const CreateNewStar = () => {
  const [fullName, setFullName] = useState("");
  const [male, setMale] = useState(true);
  const [dob, setDob] = useState("");
  const [nationality, setNationality] = useState("");
  const [description, setDescription] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    // Tạo dữ liệu người dùng
    const director = {
      FullName: fullName,
      Male: male,
      Dob: dob,
      Nationality: nationality,
      Description: description
    };

    // Gửi yêu cầu đăng ký đến API của json server bằng Axios
    const res = await axios.post(`${API_URL}/directors`, director);

    // Xử lý phản hồi từ API của json server
    if (res.status === 201) {
      // Đăng ký thành công
      alert("Đăng ký thành công");
    } else {
      // Đăng ký thất bại
      alert("Đăng ký thất bại");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form>
        <div className="form-group">
          <label for="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            className="form-control"
            placeholder="Full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="gender">Gender</label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              id="male"
              name="gender"
              value="true"
              checked={male}
              onChange={(e) => setMale(e.target.value === "true")}
            />
            <label for="male">Male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              id="female"
              name="gender"
              value="false"
              checked={!male}
              onChange={(e) => setMale(e.target.value === "false")}
            />
            <label for="female">Female</label>
          </div>
        </div>
        <div className="form-group">
          <label for="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            className="form-control"
            placeholder="Date of Birth"
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="nationality">Nationality</label>
          <input
            type="text"
            id="nationality"
            className="form-control"
            placeholder="Nationality"
            onChange={(e) => setNationality(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="description">Description</label>
          <textarea
            id="description"
            className="form-control"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Register</button>
      </form>
    </div>
  );
};

export default CreateNewStar;
