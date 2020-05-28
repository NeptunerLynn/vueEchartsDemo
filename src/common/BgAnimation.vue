<template>
    <div id="aniamtionMainContent">

    </div>
</template>
<script>
export default {
    data(){
        return {
            ele : "",
            canvas : "",
            ctx : "",
            width : "",
            height : "",
            rate : "",
            radius : "",
            points : []
        }
    },
    mounted(){
        this.ele = document.querySelector("#aniamtionMainContent");
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.ele.clientWidth;
        this.canvas.height = this.ele.clientHeight;
        this.ele.appendChild(this.canvas);
        this.ctx=this.canvas.getContext("2d");
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.rate = 0.5,this.radius = 3;
        this.points = [];
        

        // 随机生成100个点的坐标信息
        for (let i = 0; i < 80; i++) {
            this.points.push(this.getPoint());
        }
        
        // 调用draw函数开启动画
        this.draw();
    },
    methods : {
        // 随机生成点的坐标，需指定radius的最大值
        getPoint() {
            const x = Math.ceil(Math.random() * this.width), // 粒子的x坐标
                y = Math.ceil(Math.random() * this.height), // 粒子的y坐标
                r = +(Math.random() * this.radius).toFixed(4), // 粒子的半径
                rateX = +(Math.random() * 2 - 1).toFixed(4), // 粒子在x方向运动的速率
                rateY = +(Math.random() * 2 - 1).toFixed(4); // 粒子在y方向运动的速率

            return { x, y, r, rateX, rateY };
        },
        drawPoints() {
            this.points.forEach((item, i) => {
                this.ctx.beginPath();
                this.ctx.arc(item.x, item.y, item.r, 0, Math.PI*2, false);
                this.ctx.fillStyle = '#fff';
                this.ctx.fill();
                if(item.x > 0 && item.x < this.width && item.y > 0 && item.y < this.height) {
                    item.x += item.rateX * this.rate;
                    item.y += item.rateY * this.rate;
                } else {
                    this.points.splice(i, 1);
                    this.points.push(this.getPoint());
                }
            });
        },
        dis(x1, y1, x2, y2) {
            let disX = Math.abs(x1 - x2),
            disY = Math.abs(y1 - y2);
            return Math.sqrt(disX * disX + disY * disY);
        },
        drawLines() {
            const len = this.points.length;
            for(let i = 0; i < len; i++) {
                for(let j = len - 1; j >= 0; j--) {
                    const x1 = this.points[i].x,
                        y1 = this.points[i].y,
                        x2 = this.points[j].x,
                        y2 = this.points[j].y,
                        disPoint = this.dis(x1, y1, x2, y2);

                    if(disPoint <= 150) {
                        this.ctx.beginPath();
                        this.ctx.moveTo(x1, y1);
                        this.ctx.lineTo(x2, y2);
                        this.ctx.strokeStyle = '#fff';
                        this.ctx.lineWidth = 1 - this.disPoint / 150;
                        this.ctx.stroke();
                    }
                }
            }
        },
        draw(){
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.drawPoints();
            // 如果不需要画线，取消下面这行代码即可。
            this.drawLines();
            window.requestAnimationFrame(this.draw);
        }
    }
}
</script>
<style scope>
    #aniamtionMainContent{
        position: absolute;
        width:100%;
        height:100%;
        opacity : .6;
    }
</style>