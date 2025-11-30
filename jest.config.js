// jest.config.js
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  // Onde o Jest irá procurar os arquivos de teste
  testEnvironment: 'jsdom',
  
  // Informa ao Jest para usar o preset ts-jest para lidar com TS/JS
  preset: 'ts-jest',
  
  // Configurações para módulos do Next.js
  moduleNameMapper: {
    // Mapeamento para que Styled-Components funcione corretamente com Jest
    '^styled-components$':
      'styled-components/dist/styled-components.browser.cjs',
  },
  
  // Lista de diretórios que o Jest deve ignorar
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  
  // Arquivos a serem executados antes de cada teste
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  
  // Configuração para ignorar a transformação de alguns pacotes
  transformIgnorePatterns: [
    '/node_modules/',
  ],
};