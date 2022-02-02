function solve(input) {
  const valid = {
    method: ['GET', 'POST', 'DELETE', 'CONNECT'],
    uri: /^[A-Za-z.\d]{1,}$|\*/,
    version: ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'],
    message: /[^\<\>\\\&\'\"]/,
  };

  if (!valid.method.includes(input.method)) {
    throw new Error('Invalid request header: Invalid Method');
  }

  if (!valid.uri.test(input.uri) || !input.uri) {
    throw new Error('Invalid request header: Invalid URI');
  }

  if (!valid.version.includes(input.version)) {
    throw new Error('Invalid request header: Invalid Version');
  }

  if (
    input.message !== '' &&
    (!valid.message.test(input.message) || !input.message)
  ) {
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
