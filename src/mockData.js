// mockData.js (common.js의 데이터를 별도 파일로 분리)

export const mockRepoData = {
  nodejs: {
    id: 'nodejs',
    name: 'nodejs/node',
    fullName: 'Node.js (nodejs/node)',
    description: 'Node.js JavaScript runtime ✨🐢🚀✨',
    githubUrl: 'https://github.com/nodejs/node',
    stars: '105k+',
    forks: '28k+',
    language: 'JavaScript, C++',
    readmeSummary:
      'Node.js는 Chrome V8 JavaScript 엔진으로 빌드된 JavaScript 런타임입니다. 이벤트 기반, 논블로킹 I/O 모델을 사용하여 가볍고 효율적입니다.',
    techStack: ['JavaScript', 'C++', 'V8 Engine', 'Libuv'],
    recentIssueIds: ['nodeIssue1', 'nodeIssue2'],
    conventionDocContent:
      "<h3>Node.js 기여 가이드라인 (요약)</h3><ul><li><strong>코딩 스타일:</strong> C++ (Google Style 기반), JavaScript (ESLint 규칙 따름), Python (PEP 8).</li><li><strong>커밋 메시지:</strong> 특정 형식 준수 (<code> subsystem: short description (fixes #123)</code>).</li><li><strong>테스트:</strong> 모든 변경 사항에 대한 테스트 코드 작성 필수.</li></ul><p>상세 내용은 <a href='https://github.com/nodejs/node/blob/main/CONTRIBUTING.md' target='_blank'>Node.js Contributing Guide</a>를 참고하세요.</p>",
  },
  expressjs: {
    id: 'expressjs',
    name: 'expressjs/express',
    fullName: 'Express.js (expressjs/express)',
    description: 'Fast, unopinionated, minimalist web framework for node.',
    githubUrl: 'https://github.com/expressjs/express',
    stars: '67k+',
    forks: '18k+',
    language: 'JavaScript',
    readmeSummary:
      'Express는 Node.js를 위한 빠르고 개방적인 최소한의 웹 프레임워크입니다. 강력한 라우팅, 고성능을 자랑합니다.',
    techStack: ['JavaScript', 'Node.js', 'HTTP'],
    recentIssueIds: ['expressIssue1'],
    conventionDocContent:
      '<h3>Express.js 기여 가이드 (요약)</h3><ul><li><strong>스타일:</strong> JavaScript Standard Style 권장.</li><li><strong>커밋:</strong> 의미 있는 커밋 메시지 작성.</li><li><strong>PR:</strong> 변경 사항에 대한 명확한 설명과 테스트 포함.</li></ul><p>상세 내용은 저장소의 <code>Contributing.md</code>를 확인하세요.</p>',
  },
  vscode: {
    id: 'vscode',
    name: 'microsoft/vscode',
    fullName: 'VS Code (microsoft/vscode)',
    description: 'Visual Studio Code - Code Editing. Redefined.',
    githubUrl: 'https://github.com/microsoft/vscode',
    stars: '170k+',
    forks: '32k+',
    language: 'TypeScript',
    readmeSummary:
      'VS Code는 Microsoft에서 개발한 소스 코드 편집기입니다. 디버깅, Git 제어, 구문 강조, 지능형 코드 완성 등을 제공합니다.',
    techStack: ['TypeScript', 'Electron', 'Node.js'],
    recentIssueIds: ['vscodeIssue1'],
    conventionDocContent:
      "<h3>VS Code 기여 가이드 (요약)</h3><ul><li><strong>언어:</strong> 주로 TypeScript 사용.</li><li><strong>스타일:</strong> 프로젝트 내 ESLint 및 Prettier 설정 준수.</li><li><strong>PR 프로세스:</strong> 이슈 생성 후 관련 PR 제출 권장.</li></ul><p>자세한 내용은 <a href='https://github.com/microsoft/vscode/wiki/How-to-Contribute' target='_blank'>VS Code Contributing Guide</a>를 참고하세요.</p>",
  },
};

export const mockIssueData = {
  nodeIssue1: {
    id: 'nodeIssue1',
    repoId: 'nodejs',
    title: "[#58231] Test runner module mocking doesn't work for CJS",
    githubUrl: 'https://github.com/nodejs/node/issues/58231',
    aiSummary:
      'CJS에서 package.json이 main과 module을 모두 export할 경우, 테스트 러너의 모듈 모킹 기능이 오작동하는 버그입니다. 테스트 환경 구성에 영향을 줄 수 있습니다.',
    aiScoreStars: '★★★★☆',
    aiScoreText: '(90점 / 근거: 핵심 기능 오류, 재현성 높음)',
    aiTechStack: ['Node.js', 'CJS', 'Testing', 'Module Mocking'],
    originalContent:
      'When using the built-in test runner in Node.js, if a CJS package exports both `main` and `module` fields in its `package.json`, attempting to mock this module using `mock.method()` does not work as expected. The original module is imported instead of the mock. This makes testing certain scenarios very difficult.',
  },
  nodeIssue2: {
    id: 'nodeIssue2',
    repoId: 'nodejs',
    title: '[#58223] Node 22 broke readdir on Windows UNC paths',
    githubUrl: 'https://github.com/nodejs/node/issues/58223',
    aiSummary:
      'Node.js 22 버전에서 Windows UNC 경로에 대한 `fs.readdir` 함수가 올바르게 작동하지 않는 문제입니다. 네트워크 드라이브 사용 시 주의가 필요합니다.',
    aiScoreStars: '★★★★☆',
    aiScoreText: '(88점 / 근거: 특정 환경 파일 시스템 오류)',
    aiTechStack: ['Node.js', 'File System', 'Windows', 'UNC Path'],
    originalContent:
      'After upgrading to Node.js v22.x, `fs.readdir` (and `fs.readdirSync`) no longer works correctly for UNC paths on Windows (e.g., `\\\\someserver\\somefolder`). It either throws an error or returns incorrect results. This was working fine in Node.js v20.x.',
  },
  expressIssue1: {
    id: 'expressIssue1',
    repoId: 'expressjs',
    title: '[#6481] Feature Request: Ability to list routes',
    githubUrl: 'https://github.com/expressjs/express/issues/6481',
    aiSummary:
      'Express 앱에 등록된 모든 라우트 정보를 프로그래밍 방식으로 조회하는 API 기능 추가 요청입니다. 디버깅 및 문서 자동 생성에 유용할 수 있습니다.',
    aiScoreStars: '★★★☆☆',
    aiScoreText: '(75점 / 근거: 개발 편의성 향상)',
    aiTechStack: ['Express.js', 'Routing', 'API Design', 'Feature Request'],
    originalContent:
      'It would be incredibly useful for debugging and introspection purposes to have a way to programmatically list all routes registered with an Express app instance. This should ideally include the HTTP method, the path, and the stack of middleware functions associated with each route.',
  },
  vscodeIssue1: {
    id: 'vscodeIssue1',
    repoId: 'vscode',
    title: '[#200000] Feature Request: AI-powered comment generation (Example)',
    githubUrl: 'https://github.com/microsoft/vscode/issues/200000',
    aiSummary:
      'VS Code 편집기 내에서 선택된 코드 블록에 대해 AI가 자동으로 주석을 생성해주는 기능 추가 제안입니다. 코드 가독성 향상에 기여할 수 있습니다.',
    aiScoreStars: '★★★★☆',
    aiScoreText: '(82점 / 근거: 개발 생산성 향상)',
    aiTechStack: ['VS Code', 'AI', 'Code Commenting', 'Feature Request'],
    originalContent:
      "It would be great if VS Code could leverage AI to automatically generate comments for selected code blocks. For example, a user could select a complex function, right-click, and choose 'Generate AI Comment'. This would help in quickly documenting code.",
  },
};

export const mockMyActivityData = {
  totalScore: 30,
  solvedIssues: [
    { issueId: 1, title: "이슈 제목 1", repoName: "저장소 1", points: 10 },
    { issueId: 2, title: "이슈 제목 2", repoName: "저장소 2", points: 20 },
  ],
};

// 이 데이터들은 실제 애플리케이션에서는 로그인 상태, 사용자 활동 등에 따라 동적으로 변경되어야 합니다.
// Vuex, Pinia 또는 Composition API의 ref/reactive를 사용하여 상태를 관리하는 것이 좋습니다.
export let userSolvedIssues = mockMyActivityData.solvedIssues; // 사용자가 해결한 이슈 목록 (초기값은 비어있음)
export let userTotalScore = mockMyActivityData.totalScore; // 사용자 총 점수
export const USER_GITHUB_USERNAME = 'DevSorceress'; // 예시 사용자 이름
export let myAddedRepoIds = ['vscode', 'nodejs']; // 사용자가 추가한 저장소 ID 목록

// 필요에 따라 상태 업데이트 함수 추가 가능
export function addSolvedIssue(issue) {
  if (!userSolvedIssues.find((i) => i.issueId === issue.issueId)) {
    userSolvedIssues.unshift(issue); // 배열 맨 앞에 추가
    userTotalScore += issue.points;
  }
}

export function addRepoId(repoId) {
  if (!myAddedRepoIds.includes(repoId)) {
    myAddedRepoIds.push(repoId);
  }
}
