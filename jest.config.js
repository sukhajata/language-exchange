module.exports = {
    autoMock: true,
    setupFilesAfterEnv: [
      '@testing-library/react/cleanup-after-each',
    ],
    
  }