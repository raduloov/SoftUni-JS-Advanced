function solve(input) {
  const valid = {
    method: ['GET', 'POST', 'DELETE', 'CONNECT'],
    uri: /^[\w.]+$/,
    version: ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'],
    message: /^[^<>\\&'"]*$/,
  };

  if (!input.method || !valid.method.includes(input.method)) {
    throw new Error('Invalid request header: Invalid Method');
  }

  if (!input.uri || !valid.uri.test(input.uri)) {
    throw new Error('Invalid request header: Invalid URI');
  }

  if (!input.version || !valid.version.includes(input.version)) {
    throw new Error('Invalid request header: Invalid Version');
  }

  if (!input.hasOwnProperty('message') || !valid.message.test(input.message)) {
    throw new Error('Invalid request header: Invalid Message');
  }

  return input;
}

console.log(
  solve({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: '',
  })
);
