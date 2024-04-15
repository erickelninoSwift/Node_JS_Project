const { people } = require("../data");

const getAllpeople = (request, response) => {
  response.status(200).send({
    success: true,
    data: people,
  });
};

const updateData = (request, response) => {
  const { id } = request.params;
  const { name } = request.body;
  const person = people.find((person) => {
    return person.id === Number(id);
  });

  if (!person) {
    return response.status(404).json({
      success: false,
      data: "no data found ",
    });
  }

  const newPeople = people.map((data) => {
    if (data.id === Number(id)) {
      data.name = name;
    }
    return data;
  });
  console.log(newPeople);
  response.status(200).json({
    success: true,
    data: newPeople,
  });
};

const deleteUser = (request, response) => {
  const { id } = request.params;

  const person = people.find((person) => {
    return person.id === Number(id);
  });
  if (!person) {
    return response.status(404).json({
      status: "not found",
      data: people,
    });
  }
  const newpPeople = people.filter((data) => {
    return data.id !== person.id;
  });
  response.send({
    action: "deleted",
    data: newpPeople,
  });
};

module.exports = {
  getAllpeople,
  updateData,
  deleteUser,
};
