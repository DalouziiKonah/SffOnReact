import React from 'react';
import { Tab, Tabs, Table, Accordion } from 'react-bootstrap';
import curriculumData from './config/CurriculumConfig';

const Curriculum = () => {
  return (
    <div className="curriculum-container bg-light p-4 p-md-5" id ="Curriculum">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="display-5 fw-bold text-dark mb-3">{curriculumData.schoolName}</h1>
        <p className="lead text-muted">Complete Academic Programs & Fee Structure</p>
      </div>

      {/* Grade Levels Tabs */}
      <div className="bg-white rounded-4 shadow-sm p-3 p-md-4 mb-5">
        <h2 className="h3 fw-bold text-dark mb-4">All Grade Levels</h2>
        
        <Tabs defaultActiveKey="primary" id="grade-tabs" className="mb-4">
          {/* Kindergarten Section */}
          <Tab eventKey="kindergarten" title="Kindergarten">
            <div className="row g-4 mt-3">
              {curriculumData.kindergarten.levels.map((level, index) => (
                <div key={index} className="col-md-6">
                  <div className="border rounded-3 p-4 h-100">
                    <div className="d-flex justify-content-between align-items-start mb-3">
                      <h3 className="h5 fw-bold text-primary mb-0">{level.name}</h3>
                      <span className="badge bg-primary bg-opacity-10 text-primary">
                        Age {level.ageGroup}
                      </span>
                    </div>
                    <p className="text-muted mb-4">{level.description}</p>
                    
                    <div className="mb-3">
                      <h4 className="h6 fw-bold text-dark mb-2">Key Focus Areas</h4>
                      <ul className="list-unstyled">
                        {level.focusAreas.map((area, i) => (
                          <li key={i} className="mb-1">
                            <span className="d-flex align-items-center">
                              <span className="bullet bg-primary me-2"></span>
                              {area}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tab>

          {/* Primary School Section */}
          <Tab eventKey="primary" title="Primary (1st-5th)">
            <div className="row g-4 mt-3">
              {curriculumData.primarySchool.grades.map((grade, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="border rounded-3 p-4 h-100">
                    <h3 className="h5 fw-bold text-primary mb-3">Grade {grade.level}</h3>
                    
                    <div className="mb-3">
                      <h4 className="h6 fw-bold text-dark mb-2">Core Curriculum</h4>
                      <ul className="list-unstyled">
                        {grade.subjects.map((subject, i) => (
                          <li key={i} className="mb-1">
                            <span className="d-flex align-items-center">
                              <span className="bullet bg-primary me-2"></span>
                              {subject}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto">
                      <h4 className="h6 fw-bold text-dark mb-2">Special Programs</h4>
                      <p className="small text-muted">{grade.specialPrograms}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tab>

          {/* Middle School Section */}
          <Tab eventKey="middle" title="Middle (6th-8th)">
            <div className="row g-4 mt-3">
              {curriculumData.middleSchool.grades.map((grade, index) => (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="border rounded-3 p-4 h-100">
                    <h3 className="h5 fw-bold text-primary mb-3">Grade {grade.level}</h3>
                    
                    <div className="mb-3">
                      <h4 className="h6 fw-bold text-dark mb-2">Core Subjects</h4>
                      <ul className="list-unstyled">
                        {grade.coreSubjects.map((subject, i) => (
                          <li key={i} className="mb-1">
                            <span className="d-flex align-items-center">
                              <span className="bullet bg-primary me-2"></span>
                              {subject}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="h6 fw-bold text-dark mb-2">Electives</h4>
                      <p className="small text-muted">{grade.electives.join(', ')}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Tab>

          {/* High School & Higher Secondary Sections */}
          {curriculumData.academicYears.map((year, index) => (
            <Tab 
              key={index}
              eventKey={year.key || year.year.toLowerCase().replace(/\s+/g, '-')}
              title={year.year}
            >
              <div className="row g-4 mt-3">
                {year.streams.map((stream, streamIndex) => (
                  <div key={streamIndex} className="col-md-6 col-lg-4">
                    <div className="border rounded-3 p-4 h-100">
                      <div className="d-flex justify-content-between align-items-start mb-3">
                        <h3 className="h5 fw-bold text-primary mb-0">{stream.name}</h3>
                        <span className="badge bg-primary bg-opacity-10 text-primary">
                          {stream.duration}
                        </span>
                      </div>
                      <p className="text-muted mb-4">{stream.description}</p>
                      
                      <div className="mb-3">
                        <h4 className="h6 fw-bold text-dark mb-2">Core Subjects</h4>
                        <ul className="list-unstyled">
                          {stream.coreSubjects.map((subject, i) => (
                            <li key={i} className="mb-1">
                              <span className="d-flex align-items-center">
                                <span className="bullet bg-primary me-2"></span>
                                {subject}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab>
          ))}
        </Tabs>
      </div>

      {/* Comprehensive Fee Structure */}
      <div className="bg-white rounded-4 shadow-sm p-3 p-md-4" id='fees'>
        <h2 className="h3 fw-bold text-dark mb-4">Complete Fee Structure</h2>
        
        <Accordion defaultActiveKey="kindergarten" className="mb-4">
          {/* Kindergarten Fees */}
          <Accordion.Item eventKey="kindergarten">
            <Accordion.Header>Kindergarten Fees</Accordion.Header>
            <Accordion.Body>
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead className="table-dark">
                    <tr>
                      <th>Level</th>
                      <th>Admission Fee</th>
                      <th>Tuition (Monthly)</th>
                      <th>Activity Fee</th>
                      <th>Total Annual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {curriculumData.feeStructure.kindergarten.map((fee, index) => (
                      <tr key={index}>
                        <td className="fw-bold">{fee.level}</td>
                        <td>{fee.admission}</td>
                        <td>{fee.tuition}</td>
                        <td>{fee.activity}</td>
                        <td className="fw-bold text-primary">{fee.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* Primary School Fees */}
          <Accordion.Item eventKey="primary">
            <Accordion.Header>Primary School (1st-5th) Fees</Accordion.Header>
            <Accordion.Body>
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead className="table-dark">
                    <tr>
                      <th>Grade</th>
                      <th>Admission Fee</th>
                      <th>Tuition (Monthly)</th>
                      <th>Book & Uniform</th>
                      <th>Total Annual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {curriculumData.feeStructure.primary.map((fee, index) => (
                      <tr key={index}>
                        <td className="fw-bold">Grade {fee.grade}</td>
                        <td>{fee.admission}</td>
                        <td>{fee.tuition}</td>
                        <td>{fee.booksUniform}</td>
                        <td className="fw-bold text-primary">{fee.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* Middle School Fees */}
          <Accordion.Item eventKey="middle">
            <Accordion.Header>Middle School (6th-8th) Fees</Accordion.Header>
            <Accordion.Body>
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead className="table-dark">
                    <tr>
                      <th>Grade</th>
                      <th>Admission Fee</th>
                      <th>Tuition (Monthly)</th>
                      <th>Lab Fee</th>
                      <th>Total Annual</th>
                    </tr>
                  </thead>
                  <tbody>
                    {curriculumData.feeStructure.middle.map((fee, index) => (
                      <tr key={index}>
                        <td className="fw-bold">Grade {fee.grade}</td>
                        <td>{fee.admission}</td>
                        <td>{fee.tuition}</td>
                        <td>{fee.labFee}</td>
                        <td className="fw-bold text-primary">{fee.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Accordion.Body>
          </Accordion.Item>

          {/* High School & Higher Secondary Fees */}
          {curriculumData.feeStructure.highSchool.map((section, index) => (
            <Accordion.Item key={index} eventKey={section.key}>
              <Accordion.Header>{section.name} Fees</Accordion.Header>
              <Accordion.Body>
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead className="table-dark">
                      <tr>
                        <th>Stream</th>
                        <th>Admission Fee</th>
                        <th>Tuition (Monthly)</th>
                        <th>Exam Fee</th>
                        <th>Total Annual</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.fees.map((fee, feeIndex) => (
                        <tr key={feeIndex}>
                          <td className="fw-bold">{fee.stream}</td>
                          <td>{fee.admission}</td>
                          <td>{fee.tuition}</td>
                          <td>{fee.exam}</td>
                          <td className="fw-bold text-primary">{fee.total}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>

        <div className="mt-4 p-3 bg-light rounded-3">
          <h3 className="h5 fw-bold mb-3">Fee Policy Information</h3>
          <ul className="list-unstyled mb-0">
            <li className="mb-2">
              <span className="d-flex align-items-center">
                <span className="bullet bg-primary me-2"></span>
                <span>All fees are payable in two installments (April and October)</span>
              </span>
            </li>
            <li className="mb-2">
              <span className="d-flex align-items-center">
                <span className="bullet bg-primary me-2"></span>
                <span>10% discount for siblings enrolled simultaneously</span>
              </span>
            </li>
            <li className="mb-2">
              <span className="d-flex align-items-center">
                <span className="bullet bg-primary me-2"></span>
                <span>Transportation and meal plans available at additional cost</span>
              </span>
            </li>
            <li>
              <span className="d-flex align-items-center">
                <span className="bullet bg-primary me-2"></span>
                <span>Merit-based scholarships available for grades 6th and above</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;