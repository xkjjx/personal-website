CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    time_started TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    parent_skill_id INT DEFAULT NULL
    FOREIGN KEY (parent_skill_id) REFERENCES skills(id)
);

CREATE TABLE experiences {
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    organization VARCHAR(255),
    skill_id INT,
    description TEXT,
    time_started TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    time_ended TIMESTAMP DEFAULT NULL
    FOREIGN KEY (skill_id) REFERENCES skills(id)
};

CREATE TABLE experience-skills-relation {
    id SERIAL PRIMARY KEY,
    experience_id INT,
    skill_id INT,
    FOREIGN KEY (experience_id) REFERENCES experiences(id),
    FOREIGN KEY (skill_id) REFERENCES skills(id)
};

CREATE TABLE projects {
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    time_started TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    time_ended TIMESTAMP DEFAULT NULL
    FOREIGN KEY (skill_id) REFERENCES skills(id)
};

CREATE TABLE project-skills-relation {
    id SERIAL PRIMARY KEY,
    project_id INT,
    skill_id INT,
    FOREIGN KEY (project_id) REFERENCES projects(id),
    FOREIGN KEY (skill_id) REFERENCES skills(id)
};