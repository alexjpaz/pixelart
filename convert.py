#!/bin/bash
set -x

input=$1
basename=$(basename ${input})
name=${basename/\.*/}
suffix=${basename/*\./}
today=$(date "+%Y-%m-%d")

output=$(cat ${input} | openssl base64 | tr -d '\n')

cat << EOF > ./_posts/${today}-${name}.md
---
layout: post
category: scene
title: ${name}
image: data:image/${suffix};base64,${output}
---
EOF
