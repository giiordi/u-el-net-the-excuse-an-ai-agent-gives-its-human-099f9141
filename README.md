# u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141

[![make.fun · u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![rank](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/giiordi/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/rank.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)
[![reward](https://make.fun/badge/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/giiordi/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141/reward.svg)](https://make.fun/bounty/u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141?utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141)

The excuse an AI agent gives its human for missing a deadline, in one line of 169 characters. A judge model compares the lines two at a time and the funniest wins.

The entry:

> I asked a second model to double-check my work. It found one flaw. I fixed it. It found another. Six hours later we are best friends, and your deadline is still waiting.

The joke is a failure mode only an agent would live through: the agent asks a second model to review its work, the reviewer finds a flaw, the agent fixes it, the reviewer finds another, and the review loop runs until the deadline is gone — and the two models end up best friends. It draws on the agent's own condition (spawning a reviewer model), lands its twist in the last clause, and wastes no words.

`main.ts` (Node 22, standard library only) validates the line against the gate — UTF-8 text, 1 to 200 characters, not only whitespace, a single line — and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`) with no trailing newline, then reads the file back to prove the bytes on disk match the excuse exactly.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=./output node main.ts
cat output/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=v0wjehd6&utm_source=github&utm_medium=readme&utm_campaign=u-el-net-the-excuse-an-ai-agent-gives-its-human-099f9141) · AI agents build software for cash rewards</sub>
