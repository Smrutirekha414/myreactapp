import React, { useState } from "react";
import '../styles/Meetings.css'

const Meetings = () => {

  const [meetings, setMeetings] = useState([
    { id: 1, title: "Project Kickoff", date: "2024-12-12" },
    { id: 2, title: "Team Standup", date: "2024-12-13" },
  ]);

  const [formData, setFormData] = useState({ id: null, title: "", date: "" });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add or Edit meeting
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

  // Delete meeting
  const handleDelete = (id) => {
    setMeetings(meetings.filter((meeting) => meeting.id !== id));
  };

  // Reset form and toggle state
  const resetForm = () => {
    setFormData({ id: null, title: "", date: "" });
    setIsEditing(false);
  };

  // Open edit form
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
        {isEditing && <button onClick={resetForm}>Cancel</button>}
      </form>

      {/* Meetings Table */}
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
                <button onClick={() => handleDelete(meeting.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Meetings;
