import Template from "./Template";

const data = [
  {
    name: '三立',
    party: '民進黨',
    vote: 1092154,
  },
  {
    name: '三立',
    party: '國民黨',
    vote: 740025,
  },
  {
    name: '三立',
    party: '親民黨',
    vote: 89658,
  },
  {
    name: '三立',
    party: '總有效得票數',
    vote: 1921837,
  },
  {
    name: "前 1000 大投票所",
    party: '民進黨',
    vote: 788227,
  },
  {
    name: "前 1000 大投票所",
    party: '國民黨',
    vote: 594190,
  },
  {
    name: "前 1000 大投票所",
    party: '親民黨',
    vote: 68121,
  },
  {
    name: "前 1000 大投票所",
    party: '總有效得票數',
    vote: 1294794,
  },
  {
    name: "前 2000 大投票所",
    party: '民進黨',
    vote: 1480334,
  },
  {
    name: "前 2000 大投票所",
    party: '國民黨',
    vote: 1080881,
  },
  {
    name: "前 2000 大投票所",
    party: '親民黨',
    vote: 125426,
  },
  {
    name: "前 2000 大投票所",
    party: '總有效得票數',
    vote: 2448191,
  },
];

export default function SETN() {
  return (
    <Template
      channel="三立"
      data={data}
      peopleConfig={"宣稱有1000名報票工讀生"}
      rawDataContent={`假設三立每個報票員負責兩個投開票所 ，三立在16點40分報票的數值，均遠超過四種「1000大」投票所的選舉最終票數，而且當時僅為16點40分，三立前往的報票所應該尚未完成開票，如此三立的報票數值難稱合理。

假設三立每個報票員負責兩個投開票所，它在16點40分已開出來的票，就落在合理範圍，但對「2000 大」完全開完的票數比例，分別為
    • 民進黨: 73.7%
    • 國民黨: 68.46%
    • 親民黨: 71.5%
    • 總有效得票數: 78.5%，跟TVBS、民視和東森等同業相比為高。`}
      KMTdecreDataContent={`假設三立的志工能夠兼顧 2000 家投開票所，而且投開票所跟國民黨報票不重疊，因此三立的報票數 = 志工票數 + 國民黨票數。若扣除國民黨票數，與「前 2000 大」相比較，三立報票的「蔡英文票數」、「韓國瑜票數」、「宋楚瑜票數」和「總有效得票數」，開票率各達到 71.3%、65.6%、68.6%、75.6% 等，高於其他電視台同業`}
      summary={`三立報票數值對比之後，在最理想狀況下（2000 個投開票所＋國民黨計票），三立報票數落在合理範圍內，開票比率高於同業，但這項最理想值的假設，是監看小組的預設。

因此，建議三立對外說明與解釋，其實際的計票中心人力、兼顧多少投開票所，以及實際的報票依據。`}
    ></Template>
  )
}