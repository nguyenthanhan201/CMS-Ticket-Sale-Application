import { useEffect } from "react";
// import "../assets/css/ButtonDatePicker.css";

export default function ButtonDatePicker(): JSX.Element {
  useEffect(() => {
    const date_picker_element: any = document.querySelector(".date-picker");
    const selected_date_element: any = document.querySelector(
      ".date-picker .selected-date"
    );
    const dates_element: any = document.querySelector(".date-picker .dates");
    const mth_element: any = document.querySelector(
      ".date-picker .dates .month .mth"
    );
    const next_mth_element: any = document.querySelector(
      ".date-picker .dates .month .next-mth"
    );
    const prev_mth_element: any = document.querySelector(
      ".date-picker .dates .month .prev-mth"
    );
    const days_element: any = document.querySelector(
      ".date-picker .dates .days"
    );
    const days: any = document.querySelector(".top-day");

    const months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
    ];

    const days_data = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

    // days_data.map((item) => {
    //   let p = document.createElement("p");
    //   p.innerText = item;
    //   days.appendChild(p);
    // });

    for (let i = 0; i < 7; i++) {
      let p = document.createElement("p");
      p.innerText = days_data[i];
      days.appendChild(p);
      // console.log(days_data[i]);
    }

    // days.innerHTML = days_data.toString();

    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    let selectedDate = date;
    let selectedDay = day;
    let selectedMonth = month;
    let selectedYear = year;

    mth_element.textContent = months[month] + " " + year;

    selected_date_element.textContent = formatDate(date);
    selected_date_element.dataset.value = selectedDate;

    // EVENT LISTENERS
    date_picker_element.addEventListener("click", toggleDatePicker);
    next_mth_element.addEventListener("click", goToNextMonth);
    prev_mth_element.addEventListener("click", goToPrevMonth);

    // FUNCTIONS
    var stringToHTML = function (str: any) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(str, "text/html");
      return doc.body;
    };

    function toggleDatePicker(e: any) {
      if (!checkEventPathForClass(e.path, "dates")) {
        dates_element.classList.toggle("active");
      }
    }

    function goToNextMonth(e: any) {
      month++;
      if (month > 11) {
        month = 0;
        year++;
      }
      mth_element.textContent = months[month] + " " + year;
      populateDates(e);
    }

    function goToPrevMonth(e: any) {
      month--;
      if (month < 0) {
        month = 11;
        year--;
      }
      mth_element.textContent = months[month] + " " + year;
      populateDates(e);
    }

    function populateDates(e: any) {
      days_element.innerHTML = "";
      let amount_days = 31;

      if (month == 1) {
        amount_days = 28;
      }

      for (let i = 0; i < amount_days; i++) {
        const day_element = document.createElement("div");
        day_element.classList.add("day");
        day_element.textContent = "" + (i + 1);

        if (
          selectedDay == i + 1 &&
          selectedYear == year &&
          selectedMonth == month
        ) {
          day_element.classList.add("selected");
        }

        day_element.addEventListener("click", function () {
          selectedDate = new Date(year + "-" + (month + 1) + "-" + (i + 1));
          selectedDay = i + 1;
          selectedMonth = month;
          selectedYear = year;

          selected_date_element.textContent = formatDate(selectedDate);
          selected_date_element.dataset.value = selectedDate;

          populateDates(e);
        });

        days_element.appendChild(day_element);
      }
    }

    // HELPER FUNCTIONS
    function checkEventPathForClass(path: any, selector: any) {
      for (let i = 0; i < path.length; i++) {
        if (path[i].classList && path[i].classList.contains(selector)) {
          return true;
        }
      }
      return false;
    }
    function formatDate(d: any) {
      let day = d.getDate();
      if (day < 10) {
        day = "0" + day;
      }

      let month = d.getMonth() + 1;
      if (month < 10) {
        month = "0" + month;
      }

      let year = d.getFullYear();

      var p = document.createElement("p");

      p.innerText = '<i className="fas fa-angle-down"/>';
      // console.log(stringToHTML(p.innerHTML));
      return "Thang " + month + "," + year;

      for (let i = 0; i < 7; i++) {
        let p = document.createElement("p");
        p.innerText = days_data[i];
        days.appendChild(p);
        console.log(days_data[i]);
      }
    }
  });
  const handleClick = () => {
    document.querySelector(".date-picker .dates")?.classList.toggle("active");
  };
  return (
    <button>
      Tháng 1, 2021{" "}
      <span>
        <i className="far fa-calendar"></i>
      </span>
    </button>
  );
}
