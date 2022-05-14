import React, { useState } from 'react';
import Preview from './Preview/Preview';
import EditMode from './EditMode/EditMode';
import uniqid from 'uniqid';

const Main = (props) => {
  // General Info
  const [generalInfo, setGeneralInfo] = useState(props.generalInfo);

  const handleGeneralInfoChange = (e) => {
    const { name, value } = e.target;

    setGeneralInfo({ ...generalInfo, [name]: value });
  };

  // Description
  const [description, setDescription] = useState(props.description);

  const handleDescriptionChange = (e) => setDescription(e.target.value);

  // Education
  const [education, setEducation] = useState(props.education);

  const handleEducationChange = (e, id) => {
    const { name, value } = e.target;
    const updatedEducation = education.map((item) =>
      item.id === id ? { ...item, [name]: value } : item,
    );
    setEducation(updatedEducation);
  };

  const handleAddEdu = () => {
    setEducation([
      ...education,
      {
        from: '',
        to: '',
        jobTitle: '',
        company: '',
        summary: '',
        id: uniqid(),
      },
    ]);
  };

  const handleDelEdu = (id) =>
    setEducation(education.filter((item) => item.id !== id));

  // Experience
  const [experience, setExperience] = useState(props.experience);

  const handleExpChange = (e, id) => {
    const { name, value } = e.target;
    const updatedEducation = experience.map((item) =>
      item.id === id ? { ...item, [name]: value } : item,
    );
    setExperience(updatedEducation);
  };

  const handleAddExp = () => {
    setExperience([
      ...experience,
      {
        from: '',
        to: '',
        jobTitle: '',
        company: '',
        summary: '',
        id: uniqid(),
      },
    ]);
  };

  const handleDelExp = (id) =>
    setExperience(experience.filter((item) => item.id !== id));

  return (
    <main className='p-4 flex flex-col justify-start items-center gap-5 3xl:flex-row 3xl:items-start 3xl:justify-center'>
      <EditMode
        generalInfo={generalInfo}
        description={description}
        education={education}
        experience={experience}
        handleGeneralInfoChange={handleGeneralInfoChange}
        handleDescriptionChange={handleDescriptionChange}
        handleEducationChange={handleEducationChange}
        handleAddEdu={handleAddEdu}
        handleDelEdu={handleDelEdu}
        handleExpChange={handleExpChange}
        handleDelExp={handleDelExp}
        handleAddExp={handleAddExp}
      />
      <Preview
        generalInfo={generalInfo}
        description={description}
        education={education}
        experience={experience}
      />
    </main>
  );
};

export default Main;
