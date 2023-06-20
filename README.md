# APP de RAM

Aplicação feita do curso da DIO, onde é feito uma aplicação que mostra algumas informações do seu computador como sistema operacional, memoria Ram que tem, que esta sendo usada e etc.

## Algumas informações

arch()#
Retorna: <string>
Retorna a arquitetura da CPU do sistema operacional para a qual o binário Node.js foi compilado. Os valores possíveis são 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x'e 'x64'.

freemem()
Retorna: <inteiro>
Retorna a quantidade de memória livre do sistema em bytes como um número inteiro.

platform()
Retorna: <string>
Retorna uma string que identifica a plataforma do sistema operacional para a qual o binário Node.js foi compilado. O valor é definido em tempo de compilação. Os valores possíveis são 'aix', 'darwin', 'freebsd', 'linux', 'openbsd', 'sunos'e 'win32'.

totalmem()
Returns: <integer>
Returns the total amount of system memory in bytes as an integer.

Toda essa documentação se encontra no site oficial do NodeJS
link:https://nodejs.org/dist/latest-v18.x/docs/api/os.html#osarch