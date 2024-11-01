import React from 'react';

/**
 * WordpressRestApi Component
 *
 * @description
 * A component that generates a REST API for a WordPress plugin.
 *
 * @returns {JSX.Element}
 * A React Element representing the REST API for the WordPress plugin.
 */
function WordpressRestApi() {
  /**
   * generateRestApi
   *
   * @description
   * A function that generates the REST API endpoints for the WordPress plugin.
   *
   * @returns {Object}
   * An object containing the REST API endpoints.
   */
  const generateRestApi = () => {
    return {
      getUsers: {
        method: 'GET',
        endpoint: '/wp-json/plugin/v1/users',
        description: 'Get all users from the plugin',
      },
      getUserById: {
        method: 'GET',
        endpoint: '/wp-json/plugin/v1/users/:id',
        description: 'Get a specific user by ID from the plugin',
      },
      createUser: {
        method: 'POST',
        endpoint: '/wp-json/plugin/v1/users',
        description: 'Create a new user in the plugin',
      },
      updateUser: {
        method: 'PUT',
        endpoint: '/wp-json/plugin/v1/users/:id',
        description: 'Update a user by ID in the plugin',
      },
      deleteUser: {
        method: 'DELETE',
        endpoint: '/wp-json/plugin/v1/users/:id',
        description: 'Delete a user by ID from the plugin',
      },
    };
  };

  /**
   * JSX Return
   *
   * @description
   * The JSX code that represents the UI of the WordpressRestApi component.
   *
   * @returns {JSX.Element}
   */
  return (
    <div>
      <h1>WordPress Plugin REST API</h1>
      <p>This component generates the REST API endpoints for the WordPress plugin:</p>
      <pre>{JSON.stringify(generateRestApi(), null, 2)}</pre>
    </div>
  );
}

export default WordpressRestApi;