import React, { useState, useEffect } from "react";
import api from "../../api/api";
import Swal from "sweetalert2";

export const UserPage = () => {
  const [userInfor, setUserInfor] = useState({});
  const getUserInforFromAPI = async () => {
    const res = await api("getUserProfile");
    if (res.success) {
      setUserInfor(res.data.data);
    }
  };
  useEffect(() => {
    getUserInforFromAPI();
  }, []);
  const handleImageUpload = async () => {
    const { value: file } = await Swal.fire({
      title: "Select image",
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Upload your profile picture",
      },
    });

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: "Your uploaded picture",
          imageUrl: e.target.result,
          imageAlt: "The uploaded picture",
        });
      };
      reader.readAsDataURL(file);
    }
  };
  const handleChangePassword = () => {
    Swal.fire({
      title: "Change password",
      html: `<label for="old">Old password</label>
      <input type="password" name="old" id="oldPassword" class="swal2-input placeholder="Old password">
      <label for="new">New password</label>
      <input type="password" name="new" id="newPassword" class="swal2-input placeholder="New password"">`,
      confirmButtonText: "Submit",
      focusConfirm: false,
      preConfirm: () => {
        const oldPassword = Swal.getPopup().querySelector("#oldPassword").value;
        const newPassword = Swal.getPopup().querySelector("#newPassword").value;
        return { oldPassword, newPassword };
      },
    }).then((result) => {
      console.log(result.value);
      const res = api("changePassword", result.value);
      if (res.message === "Mật khẩu cũ không chính xác") {
        Swal.fire({
          icon: "error",
          text: "Your old password is incorrect",
        });
      }
      if (res.message === "Success") {
        Swal.fire({
          icon: "Success",
          title: "Your password has changed",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <section class="h-100 gradient-custom-2">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-lg-9 col-xl-7">
            <div class="card">
              <div
                class="rounded-top text-white d-flex flex-row"
                style={{ backgroundColor: "#ccc", height: "200px" }}
              >
                <div
                  class="ms-4 mt-5 d-flex flex-column"
                  style={{ width: "150px" }}
                >
                  <img
                    src={userInfor.avatar}
                    alt="Generic placeholder image"
                    class="img-fluid img-thumbnail mt-4 mb-2"
                    style={{ width: "150px", zIndex: "1" }}
                  />
                  <div className="d-flex">
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: "1", minWidth: "150px" }}
                      onClick={() => handleImageUpload()}
                    >
                      Edit avatar
                    </button>
                    <button
                      type="button"
                      class="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: "1", minWidth: "150px" }}
                      onClick={() => handleChangePassword()}
                    >
                      Change password
                    </button>
                  </div>
                </div>
                <div class="ms-3" style={{ marginTop: "130px" }}>
                  <h5>{userInfor.username}</h5>
                  <p>Hà Đông</p>
                </div>
              </div>
              <div
                class="p-4 text-black"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <div class="d-flex justify-content-end text-center py-1">
                  <div>
                    <p class="mb-1 h5">10</p>
                    <p class="small text-muted mb-0">Products</p>
                  </div>
                  <div class="px-3">
                    <p class="mb-1 h5">10</p>
                    <p class="small text-muted mb-0">Bought</p>
                  </div>
                </div>
              </div>
              <div class="card-body p-4 text-black">
                <div class="d-flex justify-content-between align-items-center mb-4">
                  <p class="lead fw-normal mb-0">Recently viewed products</p>
                </div>
                {/* using LocalStorage to generate list here */}
                <div class="row g-2">
                  <div class="col mb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                      alt="image 1"
                      class="w-100 rounded-3"
                    />
                  </div>
                  <div class="col mb-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                      alt="image 1"
                      class="w-100 rounded-3"
                    />
                  </div>
                </div>
                <div class="row g-2">
                  <div class="col">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1"
                      class="w-100 rounded-3"
                    />
                  </div>
                  <div class="col">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1"
                      class="w-100 rounded-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
