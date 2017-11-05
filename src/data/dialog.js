export default {
    fromElevenBeans: [
        {
            id: 1000,
            details: [
                "Hello 老铁，IphoneX 你怎么看？"
            ],
            responses: [
                {
                    content: "买买买！",
                    nextElevenbeans: [
                        2001
                    ]
                },
                {
                    content: "买不起 …",
                    nextElevenbeans: [
                        2002
                    ]
                },
                {
                    content: "没感觉哎 ...",
                    nextElevenbeans: [
                        2003
                    ]
                }
            ]
        },
        { // yes
            id: 2001,
            details: [
                "牛掰！真有财！！！",
                "我也买了，哈哈哈哈哈",
                "你能猜猜，目前 IponeX 带给我最大的烦恼是什么不？"
            ],
            responses: [
                {
                    content: "不会吧？！烦恼？什么？",
                    nextElevenbeans: [
                        3001
                    ]
                },
                {
                    content: "算了，要不说点别的 ？",
                    nextElevenbeans: [
                        2003
                    ]
                }
            ]
        },
        { // no
            id: 2002,
            details: [
                "可是我买了！哈哈哈哈哈！！！",
                "不过，IponeX 带给我可多烦恼了 ..."
            ],
            responses: [
                {
                    content: "不会吧？！烦恼？什么？",
                    nextElevenbeans: [
                        3001
                    ]
                },
                {
                    content: "自食其果呵呵哒 …",
                    nextElevenbeans: [
                        3002
                    ]
                }
            ]
        },
        { // whatever
            id: 2003,
            details: [
                "那好吧，你还有什么想问我的么亲 =,="
            ],
            nextUser: true
        },
        { // whatever
            id: 3001,
            details: [
                "前端适配啊！！！",
                "哦，忘记说了, 我是个写网页的 ..."
            ],
            nextElevenbeans: [
                3001
            ],
            nextUser: true
        },
        { // whatever
            id: 3002,
            details: [
                "聊不下去了。。。",
            ],
            nextElevenbeans: [
                3001
            ],
            nextUser: true
        },
        { // job
            id: 8000,
            details: [
                '这个是我的航班动态',
                '<a href="https://english.ctrip.com/flightsh5/status/" target="_blank"></a>',
                '这个是我的机票 H5 APP',
                '<a href="https://english.ctrip.com/m/flights/" target="_blank"></a>',
                '职业，一目了了然了吧？'
            ]
        },
        { // 爱好
            id: 8001,
            details: [
                "智商 250，田桑有飞机"
            ]
        },
        { // miao
            id: 8002,
            details: [
                "这个是我的🐱"
            ]
        },
        { // bye
            id: 8003,
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
            nextElevenbeans: 8000
        },
        { 	// 爱好
            id: 9001,
            brief: "爱好",
            content: "业余时间都做什么呀？",
            nextElevenbeans: 8001
        },
        {
            id: 9002,
            brief: "福利放送",
            content: "求高清无码大图！",
            nextElevenbeans: 8002
        }
    ]
}