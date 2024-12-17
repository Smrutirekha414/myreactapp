import React, { useState, useEffect } from "react";
import "../styles/Meetings.css";

const Meetings = () => {

  const [meetings, setMeetings] = useState([]);
  const [formData, setFormData] = useState({ id: null, title: "", date: "" });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const storedMeetings = JSON.parse(localStorage.getItem("meetings")) || [];
    const formattedMeetings = storedMeetings.map((meeting) => ({
      ...meeting,
      date: meeting.date || "",
    }));
    setMeetings(formattedMeetings);
  }, []);

  useEffect(() => {
    localStorage.setItem("meetings", JSON.stringify(meetings));
  }, [meetings]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setMeetings(
        meetings.map((meeting) =>
          meeting.id === formData.id ? { ...formData } : meeting
        )
      );
    } else {
      setMeetings([...meetings, { ...formData, id: Date.now() }]);
    }
    resetForm();
  };

  const handleDelete = (id) => {
    setMeetings(meetings.filter((meeting) => meeting.id !== id));
  };

  const resetForm = () => {
    setFormData({ id: null, title: "", date: "", time: "" });
    setIsEditing(false);
  };

  const handleEdit = (meeting) => {
    setFormData(meeting);
    setIsEditing(true);
  };

  return (
    <div>
      <h2>Meetings</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Meeting Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <button type="submit">{isEditing ? "Update" : "Add"} Meeting</button>
        {isEditing && <button type="button" className="cancel" onClick={resetForm}>Cancel</button>}
      </form>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting) => (
            <tr key={meeting.id}>
              <td>{meeting.title}</td>
              <td>{meeting.date}</td>
              <td>
                <button onClick={() => handleEdit(meeting)}>Edit</button>
                <button className="delete" onClick={() => handleDelete(meeting.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {meetings.length === 0 && (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>No Meetings Scheduled</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Meetings;
