import React from 'react';
import Table from 'react-bootstrap/Table';

function Mission() {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th> Mission</th>
            <th>Description</th>
            <th> Status</th>
            <th> &nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> Thaicom</td>
            <td>
              Qui cillum aute anim excepteur anim duis. Consectetur magna nostrud
              adipisicing ad aliqua aliquip ipsum sit sunt. Excepteur nulla quis ut
              dolore ut nisi aute amet. Quis aute consequat eiusmod laboris ullamco.
              Culpa dolor elit anim mollit nostrud nostrud ipsum dolor Lorem mollit
              excepteur pariatur.
              {' '}
            </td>
            <td>
              <button type="button">Active Member</button>
            </td>
            <td>
              <button type="button">Leave Mission</button>
            </td>
          </tr>

          <tr>
            <td> Thaicom</td>
            <td>
              Qui cillum aute anim excepteur anim duis. Consectetur magna nostrud
              adipisicing ad aliqua aliquip ipsum sit sunt. Excepteur nulla quis ut
              dolore ut nisi aute amet. Quis aute consequat eiusmod laboris ullamco.
              Culpa dolor elit anim mollit nostrud nostrud ipsum dolor Lorem mollit
              excepteur pariatur.
              {' '}
            </td>
            <td>
              <button type="button">Active Member</button>
            </td>
            <td>
              <button type="button">Leave Mission</button>
            </td>
          </tr>
        </tbody>

      </Table>
    </div>
  );
}
export default Mission;
