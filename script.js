
function addReport() {
  const person = document.getElementById("person").value.trim();
  const category = document.getElementById("category").value;
  const detail = document.getElementById("detail").value.trim();
  const photos = document.getElementById("photos").files;

  if (!person || !detail) {
    alert("กรุณากรอกข้อมูลให้ครบ");
    return;
  }

  if (photos.length > 2) {
    alert("แนบรูปได้สูงสุด 2 รูป");
    return;
  }

  const report = document.createElement("div");
  report.className = "report";

  const name = document.createElement("h3");
  name.textContent = person;

  const type = document.createElement("p");
  type.textContent = "ประเภท: " + category;

  const description = document.createElement("p");
  description.textContent = detail;

  report.append(name, type, description);

  document.getElementById("reports").prepend(report);

  document.getElementById("message").textContent =
    "เพิ่มรายงานในตัวอย่างเรียบร้อยแล้ว";

  document.getElementById("person").value = "";
  document.getElementById("detail").value = "";
  document.getElementById("photos").value = "";
}

