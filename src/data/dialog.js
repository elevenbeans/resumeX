/***
id 命名规则：
1XXX: 我发起的第一层对话如 1000，1001
2XXX: 我发起的第二层对话如 2000，2001
3XXX: 我发起的第二层对话如 3000，3001
NXXXX: 我发起的第 N 层对话的连接对话 (多一位数)
9XXX: 默认用户发起的对话如 3000，3001
***/
export default {
    fromElevenBeans: [
        {
            id: 1000,
            details: [
                "Hello 老铁，很高兴你能来看看，随便聊会儿天呗！IPhoneX 你感觉如何？"
            ],
            responses: [
                {
                    content: "很好！买买买！",
                    nextElevenbeans: [
                        2000
                    ]
                },
                {
                    content: "还行吧，就是买不起 …",
                    nextElevenbeans: [
                        2001
                    ]
                },
                {
                    content: "没感觉哎 ...",
                    nextElevenbeans: [
                        2002
                    ]
                }
            ]
        },
        { // yes
            id: 2000,
            details: [
                "牛掰！真有财！！！",
                "我也买了，哈哈哈哈哈 ～"
            ],
            responses: [
                {
                    content: "不会吧？！烦恼？什么？",
                    nextElevenbeans: [
                        3000
                    ]
                },
                {
                    content: "算了，要不说点别的 ？",
                    nextElevenbeans: [
                        2002
                    ]
                }
            ],
            hasMore: 20000
        },
        { // yes
            id: 20000,
            details: [
                "你能猜猜，目前 IPhoneX 带给我最大的烦恼是什么不？"
            ],
            responses: [
                {
                    content: "不会吧？！烦恼？什么？",
                    nextElevenbeans: [
                        3000
                    ]
                },
                {
                    content: "算了，要不说点别的 ？",
                    nextElevenbeans: [
                        2002
                    ]
                }
            ]
        },
        { // no
            id: 2001,
            details: [
                "可是我买了！哈哈哈哈哈！！！",
                "不过，IPhoneX 带给我可多烦恼了 ..."
            ],
            responses: [
                {
                    content: "不会吧？！烦恼？什么？",
                    nextElevenbeans: [
                        3000
                    ]
                },
                {
                    content: "自食其果呵呵哒 …",
                    nextElevenbeans: [
                        3001
                    ]
                }
            ]
        },
        { // whatever
            id: 2002,
            details: [
                "那好吧，你还有什么想问我的么亲 =,="
            ]
        },
        { // end
            id: 3000,
            details: [
                "前端适配啊！！！",
                "哦，忘记说了, 我是个写网页的 ..."
            ]
        },
        { // end
            id: 3001,
            details: [
                "聊不下去了。。。",
            ]
        },
        { // job
            id: 4000,
            details: [
                '这个是我负责的航班动态: ',
                '<a href="https://english.ctrip.com/flightsh5/status/" target="_blank">https://english.ctrip.com/flightsh5/status/</a>',
                '这个是我们团队的 Web APP: ',
                '<a href="https://english.ctrip.com/m/flights/" target="_blank">https://english.ctrip.com/m/flights/</a>',
                '<br />职业，显而易见了吧？'
            ]
        },
        { // 爱好
            id: 4001,
            details: [
                '<img src = "./src/img/luban.jpeg" />'
            ],
            hasMore: 40010
        },
        { // 爱好
            id: 40010,
            details: [
                '切你们绕行，见识新发明的威力!'
            ],
            hasMore: 40011
        },
        { // 爱好
            id: 40011,
            details: [
                '正在思考，如何攻克地心引力 ...'
            ]
        },
        { // miao
            id: 4002,
            details: [
                "这个是我的🐱：Jaber",
                '<img src = "./src/img/jaber0.jpeg" />'
            ],
            hasMore: 40020
        },
        { // miao
            id: 40020,
            details: [
                '<img src = "./src/img/jaber1.jpeg" />'
            ],
            hasMore: 40021
        },
        { // miao
            id: 40021,
            details: [
                '怎么样!!! 可爱吧！还有一只: Rocker !!!'
            ],
            hasMore: 40022
        },
        { // miao
            id: 40022,
            details: [
                '<img src = "./src/img/rocker0.jpeg" />'
            ],
            hasMore: 40023
        },
        { // miao
            id: 40023,
            details: [
                '图发多了哈。。不好意思，提起 TA 们我就忍不住哈哈 ～'
            ]
        },
        { // bye
            id: 4003,
            details: [
                "那好吧，谢谢跟我说这么多 ～"
            ]
        } 
    ],
    fromUser: [
        {
            id: 9000,
            brief: "职业",
            content: "聊聊你工作吧",
            nextElevenbeans: 4000
        },
        { 	// 爱好
            id: 9001,
            brief: "爱好",
            content: "业余时间都做什么呀？",
            nextElevenbeans: 4001
        },
        {
            id: 9002,
            brief: "福利放送",
            content: "求高清无码大图！",
            nextElevenbeans: 4002
        },
        {
            id: 9003,
            brief: "Bye bye",
            content: "有事先走了～",
            nextElevenbeans: 4003
        }
    ]
}